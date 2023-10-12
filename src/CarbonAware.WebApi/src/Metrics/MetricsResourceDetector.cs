using CarbonAware.WebApi.Metrics;
using OpenTelemetry.Resources;

public class MetricsResourceDetector : IResourceDetector
{
    private readonly CarbonMetrics carbonMetrics;

    public MetricsResourceDetector(CarbonMetrics carbonMetrics)
    {
        this.carbonMetrics = carbonMetrics;
    }

    public Resource Detect()
    {
        return ResourceBuilder.CreateEmpty().Build();
    }
}