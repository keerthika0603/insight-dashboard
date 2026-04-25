import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/methodology")({
  head: () => ({ meta: [{ title: "Methodology — ImmerseLearn" }] }),
  component: Methodology,
});

const phases = [
  { phase: "Phase 1", title: "Requirements & Literature Review", desc: "Analyzed 40+ research papers on VR pedagogy and surveyed 120 educators on curriculum gaps." },
  { phase: "Phase 2", title: "Module Design & Prototyping", desc: "Storyboarded six modules in Figma, then prototyped in Unity with the OpenXR SDK." },
  { phase: "Phase 3", title: "Telemetry Instrumentation", desc: "Embedded event tracking for gaze, interaction, completion, and biometric proxies." },
  { phase: "Phase 4", title: "Pilot Deployment", desc: "Deployed to 4 institutions with 420 learners across control (2D) and experimental (VR) groups." },
  { phase: "Phase 5", title: "Data Aggregation", desc: "Built ETL pipeline streaming telemetry to a time-series database with anonymization." },
  { phase: "Phase 6", title: "Analysis & Visualization", desc: "Statistical analysis (paired t-test, ANOVA) and dashboard built in React + Chart.js." },
];

function Methodology() {
  return (
    <div>
      <PageHeader title="Methodology" subtitle="A six-phase research and engineering pipeline." />

      <div className="relative">
        <div className="absolute left-4 lg:left-6 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-4">
          {phases.map((p) => (
            <div key={p.phase} className="relative pl-12 lg:pl-16">
              <div className="absolute left-0 top-1 h-9 w-9 lg:h-12 lg:w-12 rounded-full flex items-center justify-center text-primary-foreground text-xs lg:text-sm font-bold shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-primary)" }}>
                {p.phase.split(" ")[1]}
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{p.phase}</div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
