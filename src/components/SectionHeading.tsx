export function SectionHeading({ number, title, description }: { number: string; title: string; description: string }) {
 return <div className="section-heading"><span className="eyebrow">{number} / ENGENHARIA & PRODUTO</span><div><h2>{title}</h2><p>{description}</p></div></div>;
}
