import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p className="hero-summary">{profile.summary}</p>
      <div className="hero-links">
        <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn" href={`mailto:${profile.email}`}>
          Email
        </a>
        <a className="btn" href="#projects">
          View Projects
        </a>
      </div>
    </section>
  )
}
