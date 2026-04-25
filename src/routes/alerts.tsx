import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { alerts } from "@/lib/mock-data";
import { AlertTriangle, Info, CheckCircle2, XOctagon } from "lucide-react";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Alerts — ImmerseLearn" }] }),
  component: Alerts,
});

const styles = {
  warning: { icon: AlertTriangle, cls: "text-warning bg-warning/10 border-warning/20" },
  info: { icon: Info, cls: "text-primary bg-primary/10 border-primary/20" },
  success: { icon: CheckCircle2, cls: "text-success bg-success/10 border-success/20" },
  destructive: { icon: XOctagon, cls: "text-destructive bg-destructive/10 border-destructive/20" },
};

function Alerts() {
  return (
    <div>
      <PageHeader title="System Alerts" subtitle="Operational alerts from headsets, modules, and learner experience monitors." />

      <div className="space-y-3">
        {alerts.map((a) => {
          const s = styles[a.type];
          const Icon = s.icon;
          return (
            <div key={a.id} className={`bg-card border rounded-xl p-4 lg:p-5 shadow-[var(--shadow-card)] flex gap-4 items-start ${s.cls}`}>
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-card border border-border shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="font-semibold text-foreground">{a.title}</div>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{a.source}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
