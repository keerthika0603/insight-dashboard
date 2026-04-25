import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { sessions } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/sessions")({
  head: () => ({ meta: [{ title: "Sessions — ImmerseLearn" }] }),
  component: Sessions,
});

function Sessions() {
  const [query, setQuery] = useState("");
  const filtered = sessions.filter((s) =>
    [s.id, s.learner, s.module, s.device].some((f) => f.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div>
      <PageHeader title="VR Sessions" subtitle="Live and recent immersive learning sessions across the platform." />

      <div className="bg-card border border-border rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by learner, module, device…"
            className="h-9 rounded-md bg-muted/60 px-3 text-sm outline-none focus:ring-2 focus:ring-ring border border-transparent focus:border-border max-w-sm w-full"
          />
          <div className="text-xs text-muted-foreground">{filtered.length} results</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Session ID</th>
                <th className="text-left px-4 py-3 font-medium">Learner</th>
                <th className="text-left px-4 py-3 font-medium">Module</th>
                <th className="text-left px-4 py-3 font-medium">Device</th>
                <th className="text-left px-4 py-3 font-medium">Duration</th>
                <th className="text-left px-4 py-3 font-medium">Score</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-t border-border hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-xs">{s.id}</td>
                  <td className="px-4 py-3 font-medium">{s.learner}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.module}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.device}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.duration}</td>
                  <td className="px-4 py-3">
                    <span className={`font-semibold ${s.score >= 85 ? "text-success" : s.score >= 70 ? "text-warning" : "text-destructive"}`}>
                      {s.score}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex text-xs font-medium px-2 py-1 rounded-md ${
                        s.status === "Completed" ? "bg-success/10 text-success" :
                        s.status === "In Progress" ? "bg-primary/10 text-primary" :
                        "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
