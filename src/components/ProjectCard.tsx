import type { Project } from '../types/content';
import { media } from '../config/media';
import { Arrow } from './Arrow';
import { Photo } from './Photo';
import { LaptopMockup } from './LaptopMockup';
import { PhoneMockup } from './PhoneMockup';
import { ProjectMetrics } from './ProjectMetrics';
import { TechList } from './TechList';
export function ProjectCard({project}:{project:Project}){
 const projectLogo:Record<string,string>={twinpulse:'/logos/twinpulse.svg',crypto:'/logos/trading-bot.webp',whatsapp:'/logos/WhatsApp.webp'};
 const asset=project.id==='leal'?media.leal:project.id==='twinpulse'?media.twinpulse:null;
 return <article className={`project project-${project.id} ${asset || project.id === 'whatsapp'?'has-media':'text-project'}`} id={project.id} aria-labelledby={`${project.id}-title`}><div className="project-grid">{asset&&<div className="project-visual">{project.id === 'twinpulse' ? <LaptopMockup asset={asset}/> : <Photo asset={asset}/>}</div>}{project.id === 'whatsapp' && <div className="project-visual"><PhoneMockup src="/media/demonstracao-chatbot-editada.mp4" title="demonstração do WhatsApp Chatbot" poster="/media/chatbot-poster.jpg" aspectRatio="1220 / 2712"/></div>}<div className="project-copy"><h3 className="project-title" id={`${project.id}-title`}>{projectLogo[project.id]&&<img className="project-logo" src={projectLogo[project.id]} alt="" width="48" height="48"/>}{project.title}</h3><p className="project-status">{project.status}</p><p className="project-description">{project.description}</p>{project.metrics&&<ProjectMetrics metrics={project.metrics}/>}<div className="contributions"><ul>{project.contributions.map(item=><li key={item}>{item}</li>)}</ul></div><TechList items={project.technologies}/>{project.link&&<a className="text-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label}<Arrow diagonal/><span className="sr-only"> (abre em nova aba)</span></a>}</div></div>{project.id==='crypto'&&<div className="bitcoin-floats" aria-hidden="true"><img src="/logos/bitcoin.png" width="160" height="160" alt=""/><img className="ethereum-float" src="/icons/ethereum.svg" width="70" height="100" alt=""/><img className="solana-float" src="/icons/solana.svg" width="90" height="80" alt=""/></div>}</article>;
}
