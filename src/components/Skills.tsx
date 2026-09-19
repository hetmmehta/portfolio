import { skills } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="03" title="Skills" />
      <div className="skills-list">
        {skills.map((group) => (
          <div className="skills-row reveal" key={group.category}>
            <span className="skills-category">{group.category}</span>
            <div className="tag-row">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
