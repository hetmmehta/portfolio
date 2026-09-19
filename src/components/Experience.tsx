import { experience } from '../data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="02" title="Experience" />
      <div className="exp-list">
        {experience.map((job) => (
          <div className="exp-row reveal" key={job.company + job.period}>
            <div className="exp-period">{job.period}</div>
            <div className="exp-body">
              <div className="exp-header">
                <h3>{job.role}</h3>
                <span className="exp-company">{job.company}</span>
              </div>
              <p className="exp-location">{job.location}</p>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
