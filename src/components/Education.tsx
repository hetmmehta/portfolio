import { certifications, education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((e) => (
          <div className="timeline-item" key={e.school}>
            <div className="timeline-header">
              <h3>{e.school}</h3>
              <span className="timeline-period">{e.period}</span>
            </div>
            <p className="timeline-sub">{e.degree}</p>
            <p className="timeline-sub">{e.detail}</p>
          </div>
        ))}
      </div>
      <h3 className="cert-title">Certifications</h3>
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  )
}
