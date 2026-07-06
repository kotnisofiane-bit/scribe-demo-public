export type DemoScanStatus = {
  repository: string;
  purpose: string;
  secrets: "none";
  commercialReady: false;
};

export function describeDemoRepository(): DemoScanStatus {
  return {
    repository: "kotnisofiane-bit/scribe-demo-public",
    purpose: "public read-only structural scan demo for SCRIBE",
    secrets: "none",
    commercialReady: false,
  };
}
