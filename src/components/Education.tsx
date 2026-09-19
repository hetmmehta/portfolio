import { certifications, education } from '../data'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading index="04" title="Education" />
      <div className="exp-list">
        {education.map((e) => (
          <div className="exp-row reveal" key={e.school}>
            <div className="exp-period">{e.period}</div>
            <div className="exp-body">
              <div className="exp-header">
                <h3>{e.school}</h3>
              </div>
              <p className="exp-location">
                {e.degree} · {e.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="cert-block reveal">
        <span className="skills-category">Certifications</span>
        <ul className="cert-list">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
