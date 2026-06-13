import './Voice.css'

const credits = [
  {
    title: 'Voice Acting & Dubbing',
    detail:
      'Professional dubbing and voice-over for film and media at Rasa Institute (filimo.com), Tehran.',
    tag: 'Film & Media',
  },
  {
    title: "Children's Audiobook Narration",
    detail:
      'Character-based narration with advanced vocal modulation and emotional range.',
    tag: 'Narration',
  },
  {
    title: 'Vocal Performance',
    detail:
      'Formal training in vocal performance and advanced singing techniques.',
    tag: 'Singing',
  },
  {
    title: 'On-Camera Presentation',
    detail:
      'On-screen brand representative across cultural, literary and financial media.',
    tag: 'Presenting',
  },
]

export default function Voice() {
  return (
    <section className="section voice" id="voice">
      <div className="container voice__grid">
        <div className="voice__intro reveal">
          <p className="eyebrow">Voice &amp; Media</p>
          <h2 className="section-title">The spoken instrument</h2>
          <p className="lead">
            Beyond the canvas, my work lives in sound and presence — dubbing,
            narration, singing and the confident on-camera delivery of a story.
          </p>

          <div className="voice__wave" aria-hidden="true">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} style={{ '--i': i }} />
            ))}
          </div>
        </div>

        <ul className="voice__list">
          {credits.map((c) => (
            <li className="voice__credit reveal" key={c.title}>
              <span className="voice__tag">{c.tag}</span>
              <h3 className="voice__credit-title">{c.title}</h3>
              <p className="voice__credit-detail">{c.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
