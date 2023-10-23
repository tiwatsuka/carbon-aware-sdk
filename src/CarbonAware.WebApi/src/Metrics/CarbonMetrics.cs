using System.Collections.Concurrent;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using GSF.CarbonAware.Handlers;
using GSF.CarbonAware.Models;

namespace CarbonAware.WebApi.Metrics;

public class CarbonMetrics : IDisposable
{
    internal const string MeterName = "Carbon.Aware.Metric";
    internal const string ActivitySourceName = "Carbon.Aware.Metric";

    internal const Int32 UpdateInterval = 5000;

    private readonly IEmissionsHandler emissionsHandler;
    private readonly ILocationHandler locationHandler;

    private string[] locations;

    private readonly Meter meter;
    private readonly Timer timer;
    private readonly IDictionary<string, Measurement<double>> intensities = new Dictionary<string, Measurement<double>>();

    private readonly Random rand = new Random();  // for demo purpose

    public ActivitySource ActivitySource { get; }
    private readonly IDictionary<string, ObservableGauge<double>> gauges = new Dictionary<string, ObservableGauge<double>>();

    private readonly ReaderWriterLockSlim locationLock = new ReaderWriterLockSlim();

    private readonly ReaderWriterLockSlim intensitiesLock = new ReaderWriterLockSlim();

    public CarbonMetrics(IMeterFactory meterFactory, ILogger<CarbonMetrics> logger, IEmissionsHandler emissionsHandler, ILocationHandler locationHandler)
    {
        this.emissionsHandler = emissionsHandler ?? throw new ArgumentNullException(nameof(emissionsHandler));
        this.locationHandler = locationHandler ?? throw new ArgumentNullException(nameof(locationHandler));

        string? version = typeof(CarbonMetrics).Assembly.GetName().Version?.ToString();
        this.ActivitySource = new ActivitySource(ActivitySourceName, version);
        this.meter = meterFactory.Create(MeterName, version);
        UpdateLocations();

        this.timer = new Timer(this.GetCarbon, null, 0, UpdateInterval);
    }

    private void UpdateLocations()
    {
        Task<IDictionary<string, Location>> locationsTask = locationHandler.GetLocationsAsync();
        locationLock.EnterWriteLock();
        try
        {
            this.locations = locationsTask.Result.Keys.ToArray();
        }
        finally
        {
            locationLock.ExitWriteLock();
        }
        
    }

    public void Dispose()
    {
        this.meter.Dispose();
        this.ActivitySource.Dispose();
    }

    public void GetCarbon(object state)
    {
        //Use TestData
        var day = rand.Next(2, 31);
        var end = new DateTimeOffset(2022, 1, day, 0, 0, 0, 0, TimeSpan.Zero);
        var start = new DateTimeOffset(2022, 1, day-1, 0, 0, 0, 0, TimeSpan.Zero);
        locationLock.EnterReadLock();
        try
        {
            IEnumerable<EmissionsData> emissions = emissionsHandler.GetEmissionsDataAsync(locations, start, end).Result;
            foreach (var loc in locations){
                if (!this.gauges.ContainsKey(loc)) {
                    this.gauges[loc] = 
                        this.meter.CreateObservableGauge<double>("carbon.aware.intensity", () => GetIntensity(loc));
                }
                intensitiesLock.EnterWriteLock();
                var intensity = emissionsHandler.GetAverageCarbonIntensityAsync(loc, start, end).Result;
                try
                {
                    this.intensities[loc] = new Measurement<double>(intensity, new TagList(){{"location", loc}});
                }
                finally
                {
                    intensitiesLock.ExitWriteLock();
                }
            }
        }
        finally
        {
            locationLock.ExitReadLock();
        }
    }

    public Measurement<double> GetIntensity(string location){
        intensitiesLock.EnterReadLock();
        try
        {
            return this.intensities[location];
        }
        finally
        {
            intensitiesLock.ExitReadLock();
        }
    }
}