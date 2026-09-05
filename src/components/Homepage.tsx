import { useEffect, useState } from 'react'
import fortunes from '../constants/fortune-cookie.json'
import { activeProjects, projects } from '../constants/Projects'
import type { Project } from '../constants/Projects'

interface Props {
  ran: number
}

interface ProjectListProps {
  items: readonly Project[]
}

function generateCowsay(text: string): string {
  const maxWidth = 46
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxWidth) {
      currentLine = (currentLine + ' ' + word).trim()
    } else {
      if (currentLine) lines.push(currentLine)
      currentLine = word
    }
  }

  if (currentLine) lines.push(currentLine)

  const maxLen = Math.max(...lines.map(line => line.length))
  const bar = `+${'-'.repeat(maxLen + 2)}+`
  const rows = [bar]

  for (const line of lines) {
    rows.push(`| ${line.padEnd(maxLen)} |`)
  }

  rows.push(bar)
  rows.push('        \\   ^__^')
  rows.push('         \\  (oo)\\_______')
  rows.push('            (__)\\       )\\/')
  rows.push('                ||----w |')
  rows.push('                ||     ||')

  return rows.join('\n')
}

const ProjectList = ({ items }: ProjectListProps) => (
  <ul className="project-list">
    {items.map(project => (
      <li className="project-entry" key={project.name}>
        <div>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.desc}</p>
        </div>

        <div className="project-actions">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action"
              aria-label={`Visit ${project.name}`}
            >
              live ↗
            </a>
          ) : null}
          {project.source ? (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action"
              aria-label={`View ${project.name} source`}
            >
              source ↗
            </a>
          ) : null}
        </div>
      </li>
    ))}
  </ul>
)

export const HomePage = ({ ran }: Props) => {
  const [fortune, setFortune] = useState(fortunes[ran])

  useEffect(() => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    setFortune(randomFortune)
  }, [])

  return (
    <div className="kakeane-home">
      <header className="kakeane-hero">
        <h1>
          Projects<span aria-hidden="true">.</span>
        </h1>
        <p>
          A playground for tools, experiments, and whatever seems interesting
          enough to build.
          <em>nb. kakane means "disappointment".</em>
        </p>
      </header>

      <section
        className="kakeane-section"
        aria-labelledby="active-projects-heading"
      >
        <h2 id="active-projects-heading" className="terminal-label">
          Active projects
        </h2>
        <ProjectList items={activeProjects} />
      </section>

      <section
        className="kakeane-section"
        aria-labelledby="archived-projects-heading"
      >
        <h2 id="archived-projects-heading" className="terminal-label">
          Archived projects
        </h2>
        <ProjectList items={projects} />
      </section>

      <section className="kakeane-section" aria-labelledby="more-heading">
        <h2 id="more-heading" className="terminal-label">
          More
        </h2>
        <ul className="more-list">
          <li>
            <a
              href="https://anasalqoyyum.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>main site</span>
              <span>anasalqoyyum.dev ↗</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/anasalqoyyum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span>github.com/anasalqoyyum ↗</span>
            </a>
          </li>
        </ul>
      </section>

      <section className="fortune-section" aria-labelledby="fortune-heading">
        <div className="fortune-heading">
          <h2 id="fortune-heading" className="terminal-label">
            fortune | cowsay
          </h2>
          <span>random output</span>
        </div>
        {fortune ? (
          <pre className="fortune-text" aria-live="polite">
            {generateCowsay(fortune)}
          </pre>
        ) : (
          <p className="fortune-empty">No fortune came back.</p>
        )}
      </section>
    </div>
  )
}
