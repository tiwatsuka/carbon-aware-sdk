using Microsoft.Extensions.Options;
using CarbonAware.WebApi.Metrics;
using OpenTelemetry.Metrics;

namespace CarbonAware.WebApi.Configuration;

internal static class ServiceCollectionExtensions
{
    public static void AddMonitoringAndTelemetry(this IServiceCollection services, IConfiguration configuration)
    {
        
        var envVars = configuration?.GetSection(CarbonAwareVariablesConfiguration.Key).Get<CarbonAwareVariablesConfiguration>();
        var telemetryProvider = GetTelemetryProviderFromValue(envVars?.TelemetryProvider);
        var logger = CreateConsoleLogger(configuration);
        switch (telemetryProvider) {
            case TelemetryProviderType.ApplicationInsights:
            {
                if (IsAppInsightsConfigured(configuration, logger)) 
                {
                    services.AddApplicationInsightsTelemetry();
                }
                else 
                {
                    logger.LogWarning("Application Insights configuration not provided or incorrect.");
                }
                break;   
            }
            case TelemetryProviderType.NotProvided:
            {
                break;
            }
          // Can be extended in the future to support a different provider like Zipkin, Prometheus etc 
        }


    }

    public static IServiceCollection AddCarbonExporter(this IServiceCollection services, IConfiguration configuration)
    {
        var envVars = configuration?.GetSection(CarbonAwareVariablesConfiguration.Key).Get<CarbonAwareVariablesConfiguration>();
        var enableCarbonExporter = envVars?.EnableCarbonExporter ?? false;
        if(enableCarbonExporter){
            var carbonExporter = configuration?.GetSection(CarbonExporterConfiguration.Key);
            services.Configure<CarbonExporterConfiguration>(c => 
            {
                carbonExporter?.Bind(c);
            });

            services.AddOpenTelemetry()
                .WithMetrics(meterProviderBuilder =>
                    meterProviderBuilder
                    .ConfigureServices(services => 
                    {
                        services.AddSingleton<MetricsResourceDetector>();
                        services.AddSingleton<CarbonMetrics>();
                    })
                    .ConfigureResource(rb => rb.AddDetector(sp => sp.GetRequiredService<MetricsResourceDetector>()))
                    .AddMeter(CarbonMetrics.MeterName)
                    .AddPrometheusExporter()
                );
        }
        return services;
    }

    private static bool IsAppInsightsConfigured(IConfiguration? configuration, ILogger logger)
    {
        string? instrumentationKey = configuration?["AppInsights_InstrumentationKey"];
        string? connectionStr = configuration?["ApplicationInsights_Connection_String"];

        bool isAppInsightsConfigured = true;              
        if (!String.IsNullOrEmpty(connectionStr)) 
        {
            logger.LogInformation("Application Insights connection string found");
        } 
        else if (!String.IsNullOrEmpty(instrumentationKey)) 
        {
            logger.LogInformation("Application Insights Instrumentation Key found");
        }
        else 
        {
            isAppInsightsConfigured = false;   
        } 

        return isAppInsightsConfigured;

    }

    public static ILogger CreateConsoleLogger(IConfiguration? config)
    {
        var factory = LoggerFactory.Create(b => {
            b.AddConfiguration(config?.GetSection("Logging"));
            b.AddConsole();
        });
        return factory.CreateLogger<IServiceCollection>();
    }
    private static TelemetryProviderType GetTelemetryProviderFromValue(string? srcVal)
    {
        TelemetryProviderType result;
        if (String.IsNullOrEmpty(srcVal) ||
            !Enum.TryParse<TelemetryProviderType>(srcVal, true, out result))
        {
            return TelemetryProviderType.NotProvided;
        }
        return result;
    }
}