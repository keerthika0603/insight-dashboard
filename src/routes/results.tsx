import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { RetentionChart } from "@/components/charts";
import { retentionData } from "@/lib/mock-data";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "Results — ImmerseLearn" }] }),
  component: Results,
});

const findings = [
  { metric: "+63%", label: "Knowledge retention vs 2D learning at week 8" },
  { metric: "+87%", label: "Self-reported engagement score" },
  { metric: "−42%", label: "Time required to grasp abstract concepts" },
  { metric: "94%", label: "Learners reported willingness to continue with VR" },
];

function Results() {
  return (
    <div>
      <PageHeader title="Results & Findings" subtitle="Outcomes from the 8-week pilot study (n=420)." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {findings.map((f) => (
          <div key={f.label} className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
            <div className="text-3xl lg:text-4xl font-bold text-primary">{f.metric}</div>
            <div className="text-sm text-muted-foreground mt-2 leading-snug">{f.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)] mb-6">
        <h3 className="font-semibold mb-1">Retention Curve Comparison</h3>
        <p className="text-xs text-muted-foreground mb-3">VR-based learning sustains knowledge significantly longer.</p>
        <div className="h-80"><RetentionChart data={retentionData} /></div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)]">
        <h3 className="font-semibold mb-2">Key Observations</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
          <li>VR cohort outperformed traditional cohort on all knowledge assessments by an average of 31%.</li>
          <li>Engagement remained stable across the 8-week period, while traditional learning showed a steep drop-off.</li>
          <li>Motion sickness reports decreased from 18% to 4% after onboarding refinements.</li>
          <li>Anatomy and Astronomy modules showed the largest spatial-reasoning gains.</li>
        </ul>
      </div>
    </div>
  );
}
