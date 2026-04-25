import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function useCssVar(name: string, deps: unknown[] = []) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    setValue(v);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return value;
}

function useThemeTick() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const obs = new MutationObserver(() => setTick((t) => t + 1));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return tick;
}

const baseOpts = (gridColor: string, tickColor: string) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: tickColor, font: { size: 12 } } },
    tooltip: {
      backgroundColor: "rgba(15,23,42,0.95)",
      padding: 12,
      cornerRadius: 8,
      titleColor: "#fff",
      bodyColor: "#e2e8f0",
    },
  },
  scales: {
    x: { grid: { color: gridColor }, ticks: { color: tickColor } },
    y: { grid: { color: gridColor }, ticks: { color: tickColor } },
  },
});

export function EngagementLineChart({ data }: { data: { labels: string[]; values: number[]; sessions: number[] } }) {
  const tick = useThemeTick();
  const fg = useCssVar("--foreground", [tick]);
  const grid = useCssVar("--border", [tick]);
  const tickColor = `oklch(${fg})`;
  const gridColor = `oklch(${grid.replace("/", " /")})`;

  return (
    <Line
      data={{
        labels: data.labels,
        datasets: [
          {
            label: "Engagement %",
            data: data.values,
            borderColor: "oklch(0.55 0.22 265)",
            backgroundColor: "oklch(0.55 0.22 265 / 0.15)",
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: "oklch(0.55 0.22 265)",
          },
          {
            label: "Sessions",
            data: data.sessions.map((v) => v / 4),
            borderColor: "oklch(0.7 0.17 162)",
            backgroundColor: "oklch(0.7 0.17 162 / 0.1)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 3,
          },
        ],
      }}
      options={baseOpts(gridColor, tickColor)}
    />
  );
}

export function ModuleBarChart({ data }: { data: { labels: string[]; values: number[] } }) {
  const tick = useThemeTick();
  const fg = useCssVar("--foreground", [tick]);
  const grid = useCssVar("--border", [tick]);
  const tickColor = `oklch(${fg})`;
  const gridColor = `oklch(${grid.replace("/", " /")})`;

  return (
    <Bar
      data={{
        labels: data.labels,
        datasets: [
          {
            label: "Active Learners",
            data: data.values,
            backgroundColor: "oklch(0.55 0.22 265 / 0.85)",
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      }}
      options={{ ...baseOpts(gridColor, tickColor), plugins: { ...baseOpts(gridColor, tickColor).plugins, legend: { display: false } } }}
    />
  );
}

export function RetentionChart({ data }: { data: { labels: string[]; vr: number[]; traditional: number[] } }) {
  const tick = useThemeTick();
  const fg = useCssVar("--foreground", [tick]);
  const grid = useCssVar("--border", [tick]);
  const tickColor = `oklch(${fg})`;
  const gridColor = `oklch(${grid.replace("/", " /")})`;

  return (
    <Line
      data={{
        labels: data.labels,
        datasets: [
          {
            label: "VR-Based Learning",
            data: data.vr,
            borderColor: "oklch(0.55 0.22 265)",
            backgroundColor: "oklch(0.55 0.22 265 / 0.1)",
            fill: true,
            tension: 0.35,
            borderWidth: 3,
          },
          {
            label: "Traditional Learning",
            data: data.traditional,
            borderColor: "oklch(0.7 0.22 16)",
            backgroundColor: "oklch(0.7 0.22 16 / 0.1)",
            fill: true,
            tension: 0.35,
            borderWidth: 3,
            borderDash: [6, 4],
          },
        ],
      }}
      options={baseOpts(gridColor, tickColor)}
    />
  );
}

export function DeviceDoughnut({ data }: { data: { labels: string[]; values: number[] } }) {
  const tick = useThemeTick();
  const fg = useCssVar("--foreground", [tick]);
  const tickColor = `oklch(${fg})`;
  return (
    <Doughnut
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: [
              "oklch(0.55 0.22 265)",
              "oklch(0.68 0.18 280)",
              "oklch(0.7 0.17 162)",
              "oklch(0.77 0.19 70)",
              "oklch(0.7 0.22 16)",
            ],
            borderWidth: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: { legend: { position: "bottom", labels: { color: tickColor, padding: 14, font: { size: 12 } } } },
      }}
    />
  );
}
