import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/problem")({
  head: () => ({ meta: [{ title: "Problem Statement — ImmerseLearn" }] }),
  component: Problem,
});

function Problem() {
  return (
    <div>
      <PageHeader title="Problem Statement" subtitle="The challenges modern education faces today." />

      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-[var(--shadow-card)] space-y-5">
        <p className="text-base leading-relaxed text-muted-foreground">
          Traditional classroom and e-learning environments rely heavily on text, static images, and 2D videos.
          While accessible, these formats fail to engage spatial reasoning, kinesthetic memory, and emotional
          presence — three pillars of deep learning identified by cognitive science research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { stat: "65%", label: "of learners forget content within 7 days of passive instruction (Ebbinghaus curve)." },
            { stat: "3.2×", label: "lower engagement reported in remote 2D learning vs in-person." },
            { stat: "78%", label: "of STEM educators say abstract concepts are hardest to convey in 2D." },
          ].map((s) => (
            <div key={s.stat} className="rounded-lg bg-accent/40 p-4">
              <div className="text-3xl font-bold text-primary">{s.stat}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Core Problem</h3>
          <p className="text-muted-foreground leading-relaxed">
            There is a critical gap between how the human brain learns best — through embodied, multisensory experience
            — and how educational content is currently delivered. This results in low retention, poor concept transfer,
            and disengaged learners, particularly in STEM, medical, and historical disciplines that demand spatial
            understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
