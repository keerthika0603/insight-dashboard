import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  LayoutDashboard,
  BarChart3,
  Bell,
  Database,
  Info,
  Target,
  Lightbulb,
  FlaskConical,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Moon,
  Sun,
  Headset,
  Search,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const sections = [
  {
    label: "Dashboard",
    items: [
      { to: "/", label: "Overview", icon: LayoutDashboard },
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/sessions", label: "Sessions", icon: Database },
      { to: "/alerts", label: "Alerts", icon: Bell },
    ],
  },
  {
    label: "Project",
    items: [
      { to: "/about", label: "About", icon: Info },
      { to: "/problem", label: "Problem Statement", icon: Target },
      { to: "/objectives", label: "Objectives", icon: Lightbulb },
      { to: "/methodology", label: "Methodology", icon: FlaskConical },
      { to: "/results", label: "Results", icon: TrendingUp },
      { to: "/conclusion", label: "Conclusion", icon: CheckCircle2 },
      { to: "/future-scope", label: "Future Scope", icon: Rocket },
    ],
  },
];

export function DashboardLayout() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-200",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="h-16 flex items-center gap-2 px-5 border-b border-sidebar-border">
          <div className="h-9 w-9 rounded-lg flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
            <Headset className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm text-sidebar-foreground">ImmerseLearn</span>
            <span className="text-[11px] text-muted-foreground">VR Analytics Suite</span>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                {section.label}
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = location.pathname === item.to;
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          active
                            ? "bg-sidebar-accent text-sidebar-primary"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="rounded-lg p-3 text-xs text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
            <div className="font-semibold mb-1">Project Demo Build</div>
            <div className="opacity-90">v1.0.0 · Academic Edition</div>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card/60 backdrop-blur-sm flex items-center justify-between px-4 lg:px-6 sticky top-0 z-20">
          <div className="flex items-center gap-3 flex-1">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search modules, learners, sessions…"
                className="w-full h-9 rounded-md bg-muted/60 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring border border-transparent focus:border-border"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="h-9 w-9 rounded-md hover:bg-accent flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="h-9 w-9 rounded-md hover:bg-accent flex items-center justify-center relative" aria-label="Notifications">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full" />
            </button>
            <div className="h-9 w-9 rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold" style={{ background: "var(--gradient-primary)" }}>
              JD
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
