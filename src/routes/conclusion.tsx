import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/conclusion")({
  head: () => ({ meta: [{ title: "Conclusion — ImmerseLearn" }] }),
  component: Conclusion,
});

function Conclusion() {
  return (
    <div>
      <PageHeader title="Conclusion" subtitle="What our research demonstrates." />

      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-[var(--shadow-card)] space-y-5">
        <p className="text-base leading-relaxed text-muted-foreground">
          Our research demonstrates that VR-based immersive learning produces statistically significant improvements
          in engagement, retention, and conceptual understanding compared to traditional 2D approaches. By placing
          learners inside the subject matter, we activate spatial, kinesthetic, and emotional memory channels that
          conventional media cannot reach.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground">
          The accompanying analytics platform proves that rich session telemetry can be collected, anonymized, and
          surfaced in real time — giving educators an unprecedented window into how learners actually interact with
          content. This closes a long-standing feedback loop in education.
        </p>

        <div className="rounded-lg p-5 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <h3 className="font-semibold mb-2">In summary</h3>
          <p className="text-primary-foreground/90 leading-relaxed">
            VR is not a replacement for great teachers — it is a new medium that, when designed intentionally, makes
            their job dramatically more effective. ImmerseLearn shows that the technology, the pedagogy, and the
            measurement infrastructure are all ready for mainstream educational adoption.
          </p>
        </div>
      </div>
    </div>
  );
}
