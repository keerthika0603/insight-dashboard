import { createFileRoute } from "@tanstack/react-router";
import { Users, Headset, Activity, Brain, ArrowUpRight, TrendingUp } from "lucide-react";
import { kpis, engagementData, moduleData, deviceDistribution, alerts } from "@/lib/mock-data";
import { EngagementLineChart, ModuleBarChart, DeviceDoughnut } from "@/components/charts";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/")({
  component: Overview,
});

const iconMap = { users: Users, headset: Headset, activity: Activity, brain: Brain };

function Overview() {
  return (
    <div>
      <PageHeader title="Dashboard Overview" subtitle="Real-time pulse of your VR-based immersive learning platform." />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => {
          const Icon = iconMap[k.icon as keyof typeof iconMap];
          return (
            <div key={k.label} className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-success bg-success/10 px-2 py-1 rounded-md">
                  <ArrowUpRight className="h-3 w-3" />
                  {k.delta}
                </span>
              </div>
              <div className="text-3xl font-bold tracking-tight">{k.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{k.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Weekly Engagement</h3>
              <p className="text-xs text-muted-foreground">Engagement % and session volume across the week</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
              <TrendingUp className="h-3 w-3" /> +14.2% WoW
            </span>
          </div>
          <div className="h-72"><EngagementLineChart data={engagementData} /></div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold mb-1">Device Distribution</h3>
          <p className="text-xs text-muted-foreground mb-3">Headsets in active use</p>
          <div className="h-72"><DeviceDoughnut data={deviceDistribution} /></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold mb-1">Top VR Learning Modules</h3>
          <p className="text-xs text-muted-foreground mb-3">Active learners per module</p>
          <div className="h-72"><ModuleBarChart data={moduleData} /></div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold mb-3">Recent Alerts</h3>
          <ul className="space-y-3">
            {alerts.slice(0, 4).map((a) => (
              <li key={a.id} className="flex gap-3">
                <span
                  className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                    a.type === "destructive" ? "bg-destructive" :
                    a.type === "warning" ? "bg-warning" :
                    a.type === "success" ? "bg-success" : "bg-primary"
                  }`}
                />
                <div className="min-w-0">
                  <div className="text-sm font-medium leading-tight">{a.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{a.source} · {a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
