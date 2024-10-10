import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import type { OTLPExporterNodeConfigBase } from "@opentelemetry/otlp-exporter-base";
import type { LogRecordExporter } from "@opentelemetry/sdk-logs";

export const getLogExporter = (): LogRecordExporter => {
  const collectorOptions: OTLPExporterNodeConfigBase = {
    url: "https://some.default" + "/v1/logs",
    concurrencyLimit: 1,
  };

  return new OTLPLogExporter(collectorOptions);
};

getLogExporter();
