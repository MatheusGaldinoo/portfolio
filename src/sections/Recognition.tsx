import { achievements } from '../content/pt-BR/journey';
import { media } from '../config/media';
import { Photo } from '../components/Photo';

const groups = [
  {
    title: 'Medalhas',
    icon: 'M8.5 3H4l5 8.5m6.5-8.5H20l-5 8.5M8.5 3 12 9l3.5-6M17.5 15a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM12 12.5l.75 1.5 1.65.25-1.2 1.2.3 1.65-1.5-.8-1.5.8.3-1.65-1.2-1.2 1.65-.25Z',
    items: achievements.map(([medal, name]) => ({ name, context: medal })),
  },
  {
    title: 'Cursos',
    icon: 'M3 5h6a3 3 0 0 1 3 3v12a3 3 0 0 0-3-3H3Zm18 0h-6a3 3 0 0 0-3 3v12a3 3 0 0 1 3-3h6Z',
    items: [
      { name: 'Machine Learning', context: 'VIRTUS' },
      { name: 'Clojure', context: 'UFCG e Nubank' },
    ],
  },
  {
    title: 'Extracurriculares',
    icon: 'M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 12v-2a6 6 0 0 1 12 0v2M3 17v-1a4 4 0 0 1 3-4m15 5v-1a4 4 0 0 0-3-4',
    items: [
      { name: 'Monitoria inclusiva', context: 'Apoio a estudante com TEA' },
      { name: 'Letramento digital', context: 'Instrutor de pessoas idosas' },
      { name: 'Jogos Universitários Brasileiros', context: 'Natação pela UFCG' },
    ],
  },
];


export function Recognition() {
  return <section id="conquistas" className="recognition-section container" aria-label="Formação e conquistas">
    <div className="recognition-grid">
      <div className="recognition-photo"><Photo asset={media.medal}/></div>
      <div className="recognition-groups">
        {groups.map(group => <div className="recognition-group" key={group.title}>
          <h3 className="recognition-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={group.icon}/></svg>
            {group.title}
          </h3>
          <ul>{group.items.map(item => <li key={item.name}>
            <span>{item.name}</span><span className="recognition-context">{item.context}</span>
          </li>)}</ul>
        </div>)}
      </div>
    </div>
  </section>;
}
