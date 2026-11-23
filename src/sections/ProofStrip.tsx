export function ProofStrip() {
  return (
    <section id="destaques" className="proof-strip" aria-label="Formação e experiência">
      <div className="container proof-strip__grid">
        <div className="proof-strip__item">
          <strong>Ciência da Computação</strong>
          <img className="proof-strip__logo proof-strip__logo--ufcg" src="/media/optimized/ufcg.webp" alt="UFCG" width="56" height="56" />
        </div>
        <div className="proof-strip__item">
          <strong>Pesquisador e Desenvolvedor</strong>
          <img className="proof-strip__logo proof-strip__logo--virtus" src="/logos/virtus.svg" alt="VIRTUS" width="120" height="40" />
        </div>
        <div className="proof-strip__item">
          <strong>2× Semifinalista</strong>
          <img className="proof-strip__logo" src="/logos/campus-mobile.png" alt="Campus Mobile" width="112" height="44" />
        </div>
      </div>
    </section>
  );
}
