export const kpis = [
  { label: "Active Learners", value: "2,847", delta: "+12.4%", trend: "up" as const, icon: "users" },
  { label: "VR Sessions Today", value: "1,329", delta: "+8.1%", trend: "up" as const, icon: "headset" },
  { label: "Avg. Engagement", value: "87%", delta: "+3.2%", trend: "up" as const, icon: "activity" },
  { label: "Knowledge Retention", value: "92%", delta: "+5.6%", trend: "up" as const, icon: "brain" },
];

export const engagementData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [62, 71, 68, 84, 79, 91, 87],
  sessions: [180, 220, 198, 264, 248, 312, 298],
};

export const moduleData = {
  labels: ["Anatomy", "Physics", "Chemistry", "History", "Astronomy", "Engineering"],
  values: [342, 289, 256, 198, 234, 187],
};

export const retentionData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
  vr: [95, 92, 90, 89, 88, 87, 86, 85],
  traditional: [78, 65, 54, 47, 41, 36, 32, 29],
};

export const deviceDistribution = {
  labels: ["Meta Quest 3", "Quest 2", "HTC Vive", "Pico 4", "WebXR"],
  values: [42, 28, 12, 11, 7],
};

export const alerts = [
  { id: 1, type: "warning" as const, title: "Headset overheating reported", source: "Lab 3 — Quest 2 #14", time: "2 min ago" },
  { id: 2, type: "info" as const, title: "New module deployed: Quantum Physics VR", source: "Content Pipeline", time: "1 hr ago" },
  { id: 3, type: "success" as const, title: "Daily session goal achieved (1,300+)", source: "Engagement Engine", time: "3 hr ago" },
  { id: 4, type: "destructive" as const, title: "Motion sickness reports above threshold", source: "Anatomy Module v2.1", time: "5 hr ago" },
];

export const sessions = [
  { id: "VR-10231", learner: "Aarav Sharma", module: "Human Anatomy", duration: "42m", score: 94, device: "Quest 3", status: "Completed" },
  { id: "VR-10232", learner: "Priya Patel", module: "Solar System Tour", duration: "31m", score: 88, device: "Quest 3", status: "Completed" },
  { id: "VR-10233", learner: "Rohan Mehta", module: "Chemistry Lab", duration: "18m", score: 71, device: "Quest 2", status: "In Progress" },
  { id: "VR-10234", learner: "Ishita Roy", module: "Ancient Rome", duration: "55m", score: 96, device: "Pico 4", status: "Completed" },
  { id: "VR-10235", learner: "Kabir Singh", module: "Physics Forces", duration: "12m", score: 64, device: "HTC Vive", status: "Dropped" },
  { id: "VR-10236", learner: "Ananya Iyer", module: "Engineering CAD", duration: "47m", score: 91, device: "Quest 3", status: "Completed" },
  { id: "VR-10237", learner: "Vivaan Kapoor", module: "Marine Biology", duration: "38m", score: 85, device: "WebXR", status: "Completed" },
];
