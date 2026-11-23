import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    onClick?: never;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  };

export type GlassCtaButtonProps = AnchorProps | ButtonProps;

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const baseClass =
  'group relative inline-flex isolate items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3.5 ' +
  'text-[15px] font-medium tracking-[-0.01em] text-white/95 no-underline antialiased ' +
  'bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_100%),rgba(18,18,20,0.28)] ' +
  'backdrop-blur-[18px] backdrop-saturate-[140%] ' +
  'shadow-[0_14px_40px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(255,255,255,0.04)] ' +
  'transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ' +
  '[@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.015] hover:shadow-[0_18px_48px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.06)] ' +
  'active:scale-[0.985] active:duration-150 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 ' +
  'motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100';

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Specular border: top-left and bottom-right light refraction */}
      <span
        aria-hidden
        className="glass-cta-border pointer-events-none absolute inset-0 rounded-full p-px opacity-90 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* Soft inner volume */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_140%_at_15%_0%,rgba(255,255,255,0.16),transparent_46%),radial-gradient(120%_120%_at_85%_100%,rgba(255,255,255,0.1),transparent_42%)]"
      />
      {/* Subtle grain to avoid flat AI glass */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-[0.07] mix-blend-soft-light"
        style={{ backgroundImage: NOISE_SVG }}
      />
      <span className="relative z-10 inline-flex items-center gap-3">
        <span>{children}</span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] flex-shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      </span>
    </>
  );
}

export function GlassCtaButton(props: GlassCtaButtonProps) {
  const { children, className = '' } = props;
  const classes = `${baseClass} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const { href, className: _className, children: _children, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...rest}>
        <Content>{children}</Content>
      </a>
    );
  }

  const { className: _className, children: _children, type = 'button', ...rest } = props as ButtonProps;
  return (
    <button type={type} className={classes} {...rest}>
      <Content>{children}</Content>
    </button>
  );
}
