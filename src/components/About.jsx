import { profile, stats } from '../data/profile'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__portrait reveal">
          <img
            src="/gallery/insta/C0eXwBEogX4.jpg"
            alt="Elaheh Sheikhalizadeh in the studio"
            loading="lazy"
            decoding="async"
          />
          <span className="about__portrait-tag">In the studio · Istanbul</span>
        </div>

        <div className="about__text">
          <div className="about__intro reveal">
            <p className="eyebrow">The Artist</p>
            <h2 className="section-title">{profile.intro}</h2>
          </div>

          <div className="about__body reveal">
            {profile.about.map((p, i) => (
              <p key={i} className="about__para">
                {p}
              </p>
            ))}

            <div className="about__stats">
              {stats.map((s) => (
                <div className="about__stat" key={s.label}>
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
