const icons: Record<string, string> = { 'Render Cloud':'render', Python:'python', FastAPI:'fastapi', React:'react', TypeScript:'typescript', PostgreSQL:'postgresql', Docker:'docker', Figma:'figma', Pandas:'pandas', Java:'java', Clojure:'clojure', Git:'git', Linux:'linux-tux', Vercel:'vercel', LangChain:'langchain', 'GitHub Actions':'github-actions' };
export function TechList({items}:{items:string[]}) {
 return <ul className="tech-list" aria-label="Tecnologias">{items.filter(item => icons[item]).map(item => <li key={item} title={item} className={item==='Pandas'?'tech-pandas':undefined}><img src={`/icons/${icons[item]}.svg`} alt={item} width="32" height="32" loading="lazy"/></li>)}</ul>;
}
