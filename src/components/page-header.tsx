export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="text-muted-foreground mt-1.5 text-sm lg:text-base">{subtitle}</p>}
    </div>
  );
}
