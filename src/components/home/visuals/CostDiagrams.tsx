export function SmartRoutingDiagram() {
  return (
    <svg viewBox="0 0 554 363" className="h-full w-full" role="img">
      <title>
        Diagram: a request is scored across candidate models and routed to the highest-scoring one
      </title>
      <rect width="554" height="363" fill="#10161d" />
      <path d="M40 40 H514 V323 H40 Z" fill="none" stroke="#1c232e" />
      <path d="M40 130 H514 M40 220 H514 M194 40 V323 M348 40 V323" stroke="#1c232e" />
      <rect x="48" y="250" width="140" height="54" rx="12" fill="#6b3eff" />
      <text x="118" y="274" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Inter, sans-serif">
        User sends
      </text>
      <text x="118" y="290" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Inter, sans-serif">
        request to LLM
      </text>
      <path d="M188 277 H250" stroke="#7c70fa" strokeWidth="2" />
      <rect x="250" y="70" width="120" height="44" rx="10" fill="#1b2230" stroke="#2a3342" />
      <text x="310" y="96" textAnchor="middle" fill="#a3b4c2" fontSize="12">
        Score 0.62
      </text>
      <rect x="250" y="160" width="120" height="44" rx="10" fill="#1b2230" stroke="#6b3eff" />
      <text x="310" y="186" textAnchor="middle" fill="#fff" fontSize="12">
        Score 0.91
      </text>
      <rect x="250" y="250" width="120" height="44" rx="10" fill="#1b2230" stroke="#2a3342" />
      <text x="310" y="276" textAnchor="middle" fill="#a3b4c2" fontSize="12">
        Score 0.48
      </text>
      <path d="M370 182 H430" stroke="#5ff3e4" strokeWidth="2" />
      <rect x="430" y="160" width="90" height="44" rx="10" fill="#5ff3e4" />
      <text x="475" y="186" textAnchor="middle" fill="#071013" fontSize="12" fontWeight="600">
        Route
      </text>
    </svg>
  );
}

export function CachingDiagram() {
  return (
    <svg viewBox="0 0 554 363" className="h-full w-full" role="img">
      <title>
        Chart: cost with and without caching over time, alongside total savings from the cache
      </title>
      <rect width="554" height="363" fill="#10161d" />
      <text x="32" y="36" fill="#fff" fontSize="13" fontFamily="Inter, sans-serif">
        Cost with and without cache
      </text>
      <path d="M48 300 H520" stroke="#1c232e" />
      <path d="M48 80 V300" stroke="#1c232e" />
      <path
        d="M48 90 C120 100, 180 70, 250 110 S380 60, 520 40"
        fill="none"
        stroke="#8193a2"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M48 140 C140 160, 200 180, 280 210 S400 240, 520 250"
        fill="none"
        stroke="#6b3eff"
        strokeWidth="3"
      />
      <rect x="360" y="48" width="160" height="64" rx="12" fill="#131921" stroke="#1c232e" />
      <text x="440" y="74" textAnchor="middle" fill="#a3b4c2" fontSize="11">
        Total savings
      </text>
      <text x="440" y="96" textAnchor="middle" fill="#5ff3e4" fontSize="18" fontWeight="600">
        −38%
      </text>
    </svg>
  );
}

export function CompressionDiagram() {
  return (
    <svg viewBox="0 0 483 363" className="h-full w-full" role="img">
      <title>Diagram: a long prompt compressed to fewer tokens before it reaches the model</title>
      <rect width="483" height="363" fill="#10161d" />
      <rect x="36" y="48" width="180" height="260" rx="16" fill="#1b2230" />
      <text x="126" y="80" textAnchor="middle" fill="#a3b4c2" fontSize="12">
        Long prompt
      </text>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x="56"
          y={100 + i * 26}
          width={140 - i * 4}
          height="14"
          rx="4"
          fill={i % 2 ? "#363d44" : "#464e56"}
        />
      ))}
      <path d="M226 178 H270" stroke="#7c70fa" strokeWidth="2" />
      <rect x="270" y="118" width="170" height="120" rx="16" fill="#6b3eff" />
      <text x="355" y="168" textAnchor="middle" fill="#fff" fontSize="13">
        Compressed
      </text>
      <text x="355" y="190" textAnchor="middle" fill="#fff" fontSize="13">
        context
      </text>
    </svg>
  );
}

export function FallbackDiagram() {
  return (
    <svg viewBox="0 0 497 363" className="h-full w-full" role="img">
      <title>
        Diagram: the gateway routes around an unavailable primary model to a healthy fallback
      </title>
      <rect width="497" height="363" fill="#10161d" />
      <rect x="40" y="150" width="110" height="52" rx="12" fill="#6b3eff" />
      <text x="95" y="180" textAnchor="middle" fill="#fff" fontSize="12">
        Gateway
      </text>
      <path d="M150 176 H210" stroke="#7c70fa" strokeWidth="2" />
      <rect x="210" y="70" width="130" height="52" rx="12" fill="#1b2230" stroke="#f07167" />
      <text x="275" y="100" textAnchor="middle" fill="#f07167" fontSize="12">
        Primary down
      </text>
      <path d="M275 122 V210" stroke="#5ff3e4" strokeWidth="2" strokeDasharray="5 4" />
      <rect x="210" y="210" width="130" height="52" rx="12" fill="#5ff3e4" />
      <text x="275" y="240" textAnchor="middle" fill="#071013" fontSize="12" fontWeight="600">
        Fallback live
      </text>
      <path d="M340 236 H410" stroke="#5ff3e4" strokeWidth="2" />
      <rect x="410" y="210" width="56" height="52" rx="12" fill="#1b2230" stroke="#1c232e" />
    </svg>
  );
}
