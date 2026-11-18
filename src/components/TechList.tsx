const icons: Record<string, string> = {
  'Z-API': 'z-api', ElevenLabs: 'elevenlabs', LangGraph: 'langgraph',
  Ollama: 'ollama', 'Render Cloud': 'render', Python: 'python',
  FastAPI: 'fastapi', React: 'react', TypeScript: 'typescript',
  Docker: 'docker', Figma: 'figma', Pandas: 'pandas', Git: 'git',
};

export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="tech-list" aria-label="Tecnologias">
      {items.map(item => {
        const logoOnly = item === 'Pandas' || item === 'Z-API';
        return (
          <li key={item} title={item} className={item === 'Pandas' ? 'tech-pandas' : undefined}>
            {item === 'Claude' ? <span className="tech-claude-mark" aria-hidden="true"/> : icons[item] && <img src={`/icons/${icons[item]}.svg`} alt={logoOnly ? item : ''} width="32" height="32" loading="lazy"/>}
            {!logoOnly && <span>{item}</span>}
          </li>
        );
      })}
    </ul>
  );
}
