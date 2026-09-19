import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <div className="project-card-header">
              <h3>{p.name}</h3>
              {p.status === 'ongoing' && <span className="badge">In progress</span>}
            </div>
            <p className="project-tagline">{p.tagline}</p>
            <p className="project-desc">{p.description}</p>
            <div className="tag-row">
              {p.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="project-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  Code →
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live demo →
                </a>
              )}
              {!p.github && !p.demo && <span className="project-links-empty">Code coming soon</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
