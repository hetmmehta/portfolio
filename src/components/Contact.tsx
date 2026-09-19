import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get in touch</h2>
      <p>Open to full-time roles, collaborations, and interesting problems.</p>
      <div className="hero-links">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}. Built with React + Vite.</footer>
    </section>
  )
}
