const highlights = [
  {
    label: 'Ciência da Computação',
    src: '/media/optimized/ufcg.webp',
    alt: 'UFCG',
    className: 'proof-strip__logo proof-strip__logo--ufcg',
    width: 56,
    height: 56,
  },
  {
    label: 'Pesquisador e Desenvolvedor',
    src: '/logos/virtus.svg',
    alt: 'VIRTUS',
    className: 'proof-strip__logo proof-strip__logo--virtus',
    width: 120,
    height: 40,
  },
  {
    label: '2× Semifinalista',
    src: '/logos/campus-mobile.png',
    alt: 'Campus Mobile',
    className: 'proof-strip__logo',
    width: 112,
    height: 44,
  },
] as const;

export function ProofStrip() {
  return (
    <section id="destaques" className="proof-strip" aria-label="Formação e experiência">
      <div className="proof-strip__viewport">
        <div className="proof-strip__track">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              className="proof-strip__group"
              key={index}
              aria-hidden={index > 0 ? true : undefined}
            >
              {highlights.map((item) => (
                <div className="proof-strip__item" key={item.label}>
                  <strong>{item.label}</strong>
                  <img
                    className={item.className}
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
