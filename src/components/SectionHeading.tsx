export function SectionHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> PROJETOS SELECIONADOS</p><div className="section-heading__row"><h2>{title}</h2><p>{description}</p></div></div>;
}
