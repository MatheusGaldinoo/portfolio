import { achievements } from '../content/pt-BR/journey';
import { media } from '../config/media';
import { Photo } from '../components/Photo';
function Medal({bronze}:{bronze:boolean}) {return <svg className="medal-icon" viewBox="0 0 32 40" width="28" height="36" fill="none" aria-hidden="true"><path d="M6 2h8l7 15-7 4L6 2Z" fill="#f45c28"/><path d="M18 2h8l-8 19-7-4 7-15Z" fill="#142449"/><circle cx="16" cy="26" r="11" fill={bronze?'#f45c28':'#e8edf4'} stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="26" r="7.5" stroke="currentColor"/><path d="m16 21 1.4 3 3.4.4-2.5 2.2.7 3.4-3-1.7-3 1.7.7-3.4-2.5-2.2 3.4-.4 1.4-3Z" fill="currentColor"/></svg>}
export function Recognition() {
 return <section id="conquistas" className="recognition-section container">
    <h2>Curiosidade que vai além.</h2>
    <div className="recognition-grid">
        <div className="recognition-photo scroll-photo">
            <Photo asset={media.medal}/></div>
            <div>
                <h3>Conquistas acadêmicas</h3>
                <ul className="awards-list">{achievements.map(([medal,title])=>
                    <li key={title}><span role="img" aria-label={medal}><Medal bronze={medal==='Bronze'}/></span>
                    <span>{title}</span></li>)}</ul>
                    <div className="learning">
                        <h3>Certificados</h3>
                        <p>Machine Learning · VIRTUS
                            <br/>Clojure · NuFuturo / Nubank
                        </p>
                            <h3>Também fora da sala de aula</h3>
                            <p>Monitoria inclusiva: apoio a estudante com TEA.</p>
                            <p>Instrutor de extensão em letramento digital para idosos.</p>
                            <p>Jogos Universitários Brasileiros, representando a UFCG.</p>
                            </div></div></div></section>;
}
