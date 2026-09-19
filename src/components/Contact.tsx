import { profile } from '../data'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading index="05" title="Get in touch" />
      <div className="contact-body reveal">
        <p className="contact-lead">
          Open to full-time roles, collaborations, and interesting problems.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="hero-links contact-links">
          <a className="link-arrow" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link-arrow" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  )
}
