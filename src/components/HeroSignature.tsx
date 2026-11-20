import { useId } from 'react';

export function HeroSignature() {
  const maskId = useId();
  return (
    <svg className="hero-signature" viewBox="160 105 185 300" aria-label="Rúbrica de Matheus Galdino" role="img">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
          <path className="signature-stroke" pathLength="1" fill="none" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"
            d="M177 291 C195 271 193 172 189 126 C191 174 207 256 218 249 C231 239 243 145 249 119 C238 200 242 268 253 306 C269 343 301 282 292 255 C282 223 251 281 253 331 C252 366 267 414 291 386 C312 361 314 331 297 324 C279 318 270 342 282 344 C301 345 327 317 335 305" />
        </mask>
      </defs>
      <image href="/media/optimized/rubrica.webp" width="500" height="500" mask={`url(#${maskId})`} />
    </svg>
  );
}
