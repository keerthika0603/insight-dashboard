import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { RetentionChart, ModuleBarChart, EngagementLineChart } from "@/components/charts";
import { engagementData, moduleData, retentionData } from "@/lib/mock-data";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — ImmerseLearn" }] }),
  component: Analytics,
});

function Analytics() {
  return (
    <div>
      <PageHeader title="Learning Analytics" subtitle="Deep insights into engagement, retention, and module performance." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold mb-1">Knowledge Retention: VR vs Traditional</h3>
          <p className="text-xs text-muted-foreground mb-3">8-week longitudinal study (n=420)</p>
          <div className="h-80"><RetentionChart data={retentionData} /></div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold mb-1">Engagement Trend</h3>
          <p className="text-xs text-muted-foreground mb-3">Daily active engagement</p>
          <div className="h-80"><EngagementLineChart data={engagementData} /></div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
        <h3 className="font-semibold mb-1">Module Popularity</h3>
        <p className="text-xs text-muted-foreground mb-3">Active learners per VR module</p>
        <div className="h-80"><ModuleBarChart data={moduleData} /></div>
      </div>
    </div>
  );
}
