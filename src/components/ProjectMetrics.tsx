import type { Project } from '../types/content';
import { Icon } from './Icon';
export function ProjectMetrics({metrics}:{metrics:NonNullable<Project['metrics']>}) {
 return <dl className="project-metrics">{metrics.map((metric,i)=><div className="metric-card" key={metric.label}><dt>{metric.label}</dt><dd><Icon name={['calendar','users','bolt'][i%3] as 'calendar'|'users'|'bolt'}/>{metric.value}</dd></div>)}</dl>;
}
