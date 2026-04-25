import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/objectives")({
  head: () => ({ meta: [{ title: "Objectives — ImmerseLearn" }] }),
  component: Objectives,
});

const objectives = [
  { title: "Design immersive VR learning modules", desc: "Build six pilot modules across STEM, history, and biology disciplines." },
  { title: "Measure engagement quantitatively", desc: "Capture gaze, interaction frequency, completion rate, and emotional response." },
  { title: "Compare retention vs traditional methods", desc: "Conduct an 8-week longitudinal study with control and experimental cohorts." },
  { title: "Evaluate accessibility and comfort", desc: "Track motion sickness, session length tolerance, and inclusive design metrics." },
  { title: "Build a scalable analytics dashboard", desc: "Aggregate session telemetry into actionable insights for educators." },
  { title: "Publish open research findings", desc: "Document methodology and results for the academic community." },
];

function Objectives() {
  return (
    <div>
      <PageHeader title="Project Objectives" subtitle="The key goals driving this research." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {objectives.map((o, i) => (
          <div key={o.title} className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)] flex gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <h3 className="font-semibold">{o.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
