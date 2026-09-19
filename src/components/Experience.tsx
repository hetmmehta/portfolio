import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.company + job.period}>
            <div className="timeline-header">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-sub">
              {job.company} · {job.location}
            </p>
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
