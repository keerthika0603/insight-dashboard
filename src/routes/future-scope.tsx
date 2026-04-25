import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Brain, Users, Globe2, Sparkles, Cpu, Hand } from "lucide-react";

export const Route = createFileRoute("/future-scope")({
  head: () => ({ meta: [{ title: "Future Scope — ImmerseLearn" }] }),
  component: FutureScope,
});

const ideas = [
  { icon: Brain, title: "AI-Powered Tutors", desc: "LLM-driven NPCs that adapt explanations in real time based on learner confusion signals." },
  { icon: Users, title: "Multi-User Collaboration", desc: "Shared virtual classrooms enabling group lab work across continents." },
  { icon: Globe2, title: "Localization & Accessibility", desc: "Translate modules into 30+ languages with sign-language avatars and audio descriptions." },
  { icon: Sparkles, title: "Mixed Reality Mode", desc: "Blend physical classrooms with virtual overlays via passthrough headsets." },
  { icon: Cpu, title: "Edge Compute Streaming", desc: "Cloud-rendered VR for low-cost devices, removing the headset hardware barrier." },
  { icon: Hand, title: "Haptic Feedback Integration", desc: "Force-feedback gloves to add touch to chemistry, surgery, and engineering modules." },
];

function FutureScope() {
  return (
    <div>
      <PageHeader title="Future Scope" subtitle="Where ImmerseLearn is headed next." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map((i) => {
          const Icon = i.icon;
          return (
            <div key={i.title} className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center text-primary-foreground mb-3" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-1">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
