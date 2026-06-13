// Generates a tasteful abstract artwork placeholder as an SVG data URI.
// Used by the gallery whenever an item has no real `src` yet, so the layout
// always looks intentional. Deterministic per id+palette (no randomness).

function hashString(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

// Small deterministic PRNG seeded from the id, so each piece is unique
// but stable across reloads.
function seeded(seed) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function makePlaceholder(id, palette = ['#2b2140', '#7b466a', '#c9874f']) {
  const rand = seeded(hashString(id))
  const [c0, c1, c2] = palette
  const w = 800
  const h = 1000

  // A few soft organic blobs evoke abstract / surrealist colour fields.
  const blobs = Array.from({ length: 5 }, (_, i) => {
    const cx = Math.round(rand() * w)
    const cy = Math.round(rand() * h)
    const r = Math.round(120 + rand() * 320)
    const fill = [c1, c2, c0][i % 3]
    const op = (0.25 + rand() * 0.4).toFixed(2)
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${op}" />`
  }).join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c0}" />
        <stop offset="1" stop-color="${c1}" />
      </linearGradient>
      <filter id="b"><feGaussianBlur stdDeviation="60" /></filter>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)" />
    <g filter="url(#b)">${blobs}</g>
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
