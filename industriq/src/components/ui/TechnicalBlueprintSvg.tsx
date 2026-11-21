export function CadDatumDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      aria-hidden="true"
    >
      {/* Coordinate grid */}
      <rect x="0.5" y="0.5" width="419" height="239" stroke="currentColor" strokeOpacity="0.2" />
      <line x1="60" y1="0" x2="60" y2="240" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="210" y1="0" x2="210" y2="240" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="4 4" />
      <line x1="360" y1="0" x2="360" y2="240" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="0" y1="120" x2="420" y2="120" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="4 4" />

      {/* Precision Impeller / Datum Rings */}
      <circle cx="210" cy="120" r="76" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" />
      <circle cx="210" cy="120" r="52" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="210" cy="120" r="24" stroke="#F47732" strokeWidth="1.5" />
      <circle cx="210" cy="120" r="3.5" fill="#F47732" />

      {/* Axis Caliper Vectors */}
      <line x1="112" y1="120" x2="308" y2="120" stroke="currentColor" strokeOpacity="0.45" />
      <line x1="210" y1="24" x2="210" y2="216" stroke="currentColor" strokeOpacity="0.45" />
      <path d="M134 44 L152 62 M286 44 L268 62 M134 196 L152 178 M286 196 L268 178" stroke="currentColor" strokeOpacity="0.35" />

      {/* Tolerance Callout Box */}
      <line x1="264" y1="68" x2="318" y2="34" stroke="#F47732" strokeWidth="1.2" />
      <rect x="318" y="20" width="84" height="28" fill="#171918" stroke="#F47732" strokeWidth="1" />
      <text x="326" y="38" fill="#F3F0E9" fontSize="10" fontFamily="monospace" letterSpacing="0.08em">
        ±0.002 MM
      </text>

      {/* Bottom Technical Callout */}
      <text x="16" y="224" fill="currentColor" fillOpacity="0.55" fontSize="9" fontFamily="monospace" letterSpacing="0.12em">
        DATUM A // ISO 2768-fH // ZEISS CMM VERIFIED
      </text>
    </svg>
  );
}

export function BrandMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="6" width="6" height="20" fill="currentColor" />
      <polygon points="15,6 26,6 26,17 20,26 15,26" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="19" y="10" width="4" height="4" fill="#F47732" />
    </svg>
  );
}
