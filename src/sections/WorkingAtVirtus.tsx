import { Photo } from '../components/Photo';
import { media } from '../config/media';

export function WorkingAtVirtus() {
  return <section id="trabalho" className="working-section" aria-label="Como trabalho">
    <Photo asset={media.teamwork} className="working-section__background" />
    <div className="working-section__content container">
      <div className="working-summary">
        <div className="working-summary__copy">
          <div><h3>Planejamento e colaboração</h3>
            <p>No VIRTUS, atuo com <span className="work-emphasis">Scrum</span>, planejamento de sprint e responsabilidades divididas. No Skills Incubator, exercito semanalmente <span className="work-emphasis">soft skills</span> com psicóloga: escuta ativa, assertividade, oratória e priorização.</p>
          </div>
          <div><h3>Programação com agentes</h3>
            <p>Com Codex, OpenCode e <span className="work-emphasis">Antigravity</span>, uso <span className="work-emphasis">prompt engineering</span> para organizar contexto e tarefas. Defino critérios de aceite, reviso e testo o código: <span className="work-emphasis">validação e responsabilidade pela entrega continuam comigo</span>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
