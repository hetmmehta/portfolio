import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow reveal">Full-stack engineer · {profile.location}</p>
      <h1 className="hero-name reveal">{profile.name}</h1>
      <p className="hero-role reveal">{profile.title}, building thoughtful products end to end.</p>
      <p className="hero-summary reveal">{profile.summary}</p>
      <div className="hero-links reveal">
        <a className="link-arrow" href="#work">
          View work
        </a>
        <a className="link-arrow" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="link-arrow" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="link-arrow" href={`mailto:${profile.email}`}>
          Email
        </a>
      </div>
    </section>
  )
}
