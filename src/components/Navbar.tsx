import { useRef, useState } from 'react';
import { site } from '../content/pt-BR/site';
import { links } from '../config/links';
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}>
    <div className="container navbar"><a className="wordmark" href="#inicio" aria-label="Matheus Galdino, início" onClick={() => setOpen(false)}>mg<span>.</span></a>
    <button ref={toggle} className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="main-navigation" aria-label="Navegação principal" className={open ? 'navigation is-open' : 'navigation'}>{site.navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}{links.resume && <a href={links.resume} download>Currículo ↗</a>}<span className="nav-caption">ENGENHARIA & PESQUISA</span></nav></div>
  </header>;
}
