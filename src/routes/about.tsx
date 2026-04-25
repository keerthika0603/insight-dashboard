import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Headset, Sparkles, GraduationCap, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — ImmerseLearn" }] }),
  component: About,
});

const features = [
  { icon: Headset, title: "Immersive 6-DoF Modules", desc: "Fully interactive scenes covering anatomy, physics, history, and more." },
  { icon: Sparkles, title: "Adaptive Learning", desc: "AI-driven difficulty calibration based on real-time learner telemetry." },
  { icon: GraduationCap, title: "Pedagogically Designed", desc: "Curriculum aligned with Bloom's taxonomy and constructivist principles." },
  { icon: Globe2, title: "Cross-Platform XR", desc: "Runs on Meta Quest, Pico, HTC Vive and WebXR-capable browsers." },
];

function About() {
  return (
    <div>
      <PageHeader title="About the Project" subtitle="ImmerseLearn — A VR-Based Immersive Learning Platform" />

      <div className="rounded-2xl p-8 mb-6 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Reimagining education through virtual reality</h2>
          <p className="text-primary-foreground/90 leading-relaxed">
            ImmerseLearn is an academic research project exploring how virtual reality can transform passive learning
            into experiential, embodied, and memorable journeys. By placing learners inside the subject matter — from
            walking through ancient Rome to manipulating molecules in a chemistry lab — we measurably improve
            engagement and long-term knowledge retention.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center text-primary-foreground mb-3" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
