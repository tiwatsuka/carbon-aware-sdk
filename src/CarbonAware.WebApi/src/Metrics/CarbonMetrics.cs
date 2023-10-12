using System.Threading;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using GSF.CarbonAware.Handlers;
using GSF.CarbonAware.Models;

namespace CarbonAware.WebApi.Metrics;

public class CarbonMetrics : IDisposable
{
    internal const string MeterName = "Carbon.Aware.Metric";
    internal const string ActivitySourceName = "Carbon.Aware.Metric";

    private readonly IEmissionsHandler emissionsHandler;
    private readonly ILocationHandler locationHandler;
    private readonly Meter meter;
    private readonly Timer timer;
    private readonly IDictionary<string, double> emissions = new Dictionary<string, double>();

    private readonly Random rand = new Random();  // for demo purpose

    public ActivitySource ActivitySource { get; }
    private readonly IDictionary<string, ObservableGauge<double>> gauges = new Dictionary<string, ObservableGauge<double>>();

    public CarbonMetrics(ILogger<CarbonMetrics> logger, IEmissionsHandler emissionsHandler, ILocationHandler locationHandler)
    {
        this.emissionsHandler = emissionsHandler ?? throw new ArgumentNullException(nameof(emissionsHandler));
        this.locationHandler = locationHandler ?? throw new ArgumentNullException(nameof(locationHandler));

        string? version = typeof(CarbonMetrics).Assembly.GetName().Version?.ToString();
        this.ActivitySource = new ActivitySource(ActivitySourceName, version);
        this.meter = new Meter(MeterName, version);

        this.timer = new Timer(this.GetCarbon, null, 0, 5000);
    }

    public void Dispose(){
        this.meter.Dispose();
        this.ActivitySource.Dispose();
    }

    public void GetCarbon(object state)
    {
        Task<IDictionary<string, Location>> locationsTask = locationHandler.GetLocationsAsync();
        string[] locationArray;
        locationsTask.ContinueWith((Task<IDictionary<string, Location>> t) => {
            IDictionary<string, Location> locations = t.Result;
            locationArray = locations.Keys.ToArray();

            //Use TestData
            var day = rand.Next(2, 31);
            var end = new DateTimeOffset(2022, 1, day, 0, 0, 0, 0, TimeSpan.Zero);
            var start = new DateTimeOffset(2022, 1, day-1, 0, 0, 0, 0, TimeSpan.Zero);
            IEnumerable<EmissionsData> emissions = emissionsHandler.GetEmissionsDataAsync(locationArray, start, end).Result;
            foreach (var x in emissions){
                if (!this.gauges.ContainsKey(x.Location)) {
                    this.gauges[x.Location] = 
                        this.meter.CreateObservableGauge<double>("carbon.aware.emission." + x.Location, () => GetEmission(x.Location));
                }
                this.emissions[x.Location] = x.Rating;
            }
        });
    }

    public double GetEmission(string location){
        return this.emissions[location];
    }
}