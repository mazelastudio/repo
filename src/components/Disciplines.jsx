import { profile } from '../data/profile'
import './Disciplines.css'

export default function Disciplines() {
  return (
    <section className="section section--dark disciplines" id="work">
      <div className="container">
        <div className="disciplines__head reveal">
          <p className="eyebrow">Practice</p>
          <h2 className="section-title">A multidisciplinary craft</h2>
          <p className="lead">
            Fifteen years across canvas, wall, voice and screen — distinct
            disciplines bound by a single instinct for visual storytelling.
          </p>
        </div>

        <div className="disciplines__grid">
          {profile.disciplines.map((d, i) => (
            <article className="discipline reveal" key={d.title}>
              <span className="discipline__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="discipline__title">{d.title}</h3>
              <p className="discipline__blurb">{d.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
