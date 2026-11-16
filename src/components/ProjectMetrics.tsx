import type { Project } from '../types/content';
export function ProjectMetrics({ metrics }: { metrics: NonNullable<Project['metrics']> }) {
  return <dl className="project-metrics">{metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>;
}
