import { experience, education, training, languages } from '../data/experience'
import './Journey.css'

export default function Journey() {
  return (
    <section className="section section--dark journey" id="journey">
      <div className="container">
        <div className="journey__head reveal">
          <p className="eyebrow">Curriculum Vitae</p>
          <h2 className="section-title">The journey</h2>
        </div>

        <div className="journey__timeline">
          {experience.map((job) => (
            <article className="journey__item reveal" key={job.role + job.period}>
              <div className="journey__period">{job.period}</div>
              <div className="journey__content">
                <h3 className="journey__role">{job.role}</h3>
                <p className="journey__org">{job.org}</p>
                <ul className="journey__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="journey__aside">
          <div className="journey__panel reveal">
            <h4 className="journey__panel-title">Education</h4>
            {education.map((e) => (
              <div className="journey__edu" key={e.degree}>
                <span className="journey__edu-degree">{e.degree}</span>
                <span className="journey__edu-school">
                  {e.school} · {e.period}
                </span>
              </div>
            ))}
          </div>

          <div className="journey__panel reveal">
            <h4 className="journey__panel-title">Training</h4>
            <ul className="journey__tags">
              {training.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="journey__panel reveal">
            <h4 className="journey__panel-title">Languages</h4>
            {languages.map((l) => (
              <div className="journey__lang" key={l.name}>
                <span>{l.name}</span>
                <span className="journey__lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
