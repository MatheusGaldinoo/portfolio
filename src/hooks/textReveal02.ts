import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export interface TextReveal02Options {
  ignoreManual?: boolean;
}

export function textReveal02(
  scope: ParentNode = document,
  delay = 0,
  { ignoreManual = false }: TextReveal02Options = {}
) {
  const CONFIG = {
    lines: { duration: 0.04, stagger: 0.03, ease: "power1.out" },
    words: { duration: 0.04, stagger: 0.03, ease: "power1.out" },
    chars: { duration: 0.04, stagger: 0.03, ease: "power1.out" },
    scrollStart: "top 85%",
    scrubStart: "top 80%",
    scrubEnd: "center center",
    once: false,
    markers: false,
  } as const;

  const allSplitEls = scope.querySelectorAll<HTMLElement>("[data-reveal-02]");
  const autoEls = ignoreManual
    ? [...allSplitEls]
    : [...allSplitEls].filter((el) => !el.hasAttribute("data-manual"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(allSplitEls, { visibility: "visible" });
    return;
  }

  gsap.set(autoEls, { visibility: "visible" });

  allSplitEls.forEach((el) => {
    const splitType = el.getAttribute("data-reveal-02") as
      | keyof Pick<typeof CONFIG, "lines" | "words" | "chars">
      | null;
    if (!splitType) return;

    const c = CONFIG[splitType];
    if (!c) return;

    let type: string;
    let linesClass: string | undefined;
    let wordsClass: string | undefined;
    let charsClass: string | undefined;

    switch (splitType) {
      case "lines":
        type = "lines";
        linesClass = "line";
        break;
      case "words":
        type = "words, lines";
        wordsClass = "word";
        linesClass = "line";
        break;
      case "chars":
        type = "chars, words, lines";
        charsClass = "char";
        wordsClass = "word";
        linesClass = "line";
        break;
      default:
        return;
    }

    if (!ignoreManual && el.hasAttribute("data-manual")) {
      SplitText.create(el, {
        type,
        autoSplit: true,
        ...(linesClass && { linesClass }),
        ...(wordsClass && { wordsClass }),
        ...(charsClass && { charsClass }),
      });
      return;
    }

    const scrollMode = el.getAttribute("data-scroll");
    const useScroll = el.hasAttribute("data-scroll");
    const useScrub = scrollMode === "scrub";

    SplitText.create(el, {
      type,
      autoSplit: true,
      ...(linesClass && { linesClass }),
      ...(wordsClass && { wordsClass }),
      ...(charsClass && { charsClass }),
      onSplit(instance) {
        const durationValue = parseFloat(el.dataset.duration ?? "");
        const staggerValue = parseFloat(el.dataset.stagger ?? "");
        const delayValue = parseFloat(el.dataset.delay ?? "");
        const duration = Number.isNaN(durationValue) ? c.duration : durationValue;
        const stagger = Number.isNaN(staggerValue) ? c.stagger : staggerValue;
        const elDelay = Number.isNaN(delayValue) ? 0 : delayValue;
        const ease = el.dataset.ease || c.ease;

        const targets = instance[splitType];
        const fromColor = el.dataset.revealFromColor;
        const once = el.hasAttribute("data-once")
          ? el.getAttribute("data-once") !== "false"
          : CONFIG.once;

        const tween: gsap.TweenVars = {
          opacity: 0.1,
          ...(fromColor && { color: fromColor }),
          duration,
          stagger,
          delay: useScroll ? elDelay : elDelay + delay,
          immediateRender: true,
          ease,
        };

        if (useScrub) {
          tween.scrollTrigger = {
            trigger: el,
            start: CONFIG.scrubStart,
            end: CONFIG.scrubEnd,
            scrub: true,
            markers: CONFIG.markers,
            ...(once && { onLeave: (self) => self.kill(false) }),
          };
        } else if (useScroll) {
          const start = scrollMode || CONFIG.scrollStart;
          tween.scrollTrigger = {
            trigger: el,
            start: `clamp(${start})`,
            markers: CONFIG.markers,
            ...(once ? { once: true } : { toggleActions: "play none none reverse" }),
          };
        }

        return gsap.from(targets, tween);
      },
    });
  });
}