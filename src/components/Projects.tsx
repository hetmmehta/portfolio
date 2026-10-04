import { projects } from '../data'
import ProjectArt from './ProjectArt'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading index="01" title="Selected work" note={`${projects.length} projects`} />
      <div className="work-list">
        {projects.map((p, i) => (
          <article className="work-row reveal" key={p.name} style={{ transitionDelay: `${Math.min(i, 4) * 60}ms` }}>
            <div className="work-art">
              <ProjectArt variant={p.art} />
            </div>
            <div className="work-body">
              <div className="work-top">
                <span className="work-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="work-links">
                  {p.github && (
                    <a className="link-arrow" href={p.github} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                  {p.demo && (
                    <a className="link-arrow" href={p.demo} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {!p.github && !p.demo && <span className="work-links-empty">Code coming soon</span>}
                </div>
              </div>
              <div className="work-title-row">
                <h3>{p.name}</h3>
                {p.status === 'ongoing' && <span className="badge">In progress</span>}
              </div>
              <p className="work-tagline">{p.tagline}</p>
              <ul className="work-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="tag-row">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
