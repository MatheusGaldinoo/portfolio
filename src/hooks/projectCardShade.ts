import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// O card ultrapassado escurece conforme o próximo sobe e o encobre na pilha.
export function attachProjectCardShade(root: HTMLElement) {
  const context = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.project-list > *', root);
    const sectionAfterList = cards.at(-1)?.closest('section')?.nextElementSibling;
    const incomingAfterList = sectionAfterList instanceof HTMLElement ? sectionAfterList : null;

    cards.forEach((card, index) => {
      // O último card é encoberto pela seção seguinte, não por outro projeto.
      const incoming = cards[index + 1] ?? incomingAfterList;
      if (!incoming) return;

      const shade = { value: 0 };
      gsap.to(shade, {
        value: 1,
        ease: 'none',
        onUpdate: () => card.style.setProperty('--card-shade', shade.value.toFixed(3)),
        scrollTrigger: {
          trigger: incoming,
          start: 'top 60%',
          end: 'top 10%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
  }, root);

  return {
    refresh: () => ScrollTrigger.refresh(),
    detach: () => {
      context.revert();
      root.querySelectorAll<HTMLElement>('.project-list > *').forEach(card => {
        card.style.removeProperty('--card-shade');
      });
    },
  };
}
