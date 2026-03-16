import { activeProjects, projects } from '../constants/Projects'
import fortunes from '../constants/fortune-cookie.json'
import { useState, useEffect } from 'react'

interface Props {
  ran: number
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

  const maxLen = Math.max(...lines.map((l) => l.length))
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

export const HomePage = ({ ran }: Props) => {
  const [fortune, setFortune] = useState(fortunes[ran])

  useEffect(() => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    setFortune(randomFortune)
  }, [])

  return (
    <div className="kk-wrapper">

      {/* ── Nav ─────────────────────────────────────────── */}
      <nav className="kk-nav">
        <span className="kk-nav-brand">
          <span className="tilde">~</span>/kakeane-projects
        </span>
        <ul className="kk-nav-links">
          <li>
            <a
              href="https://anasalqoyyum.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="kk-nav-link"
            >
              site ↗
            </a>
          </li>
          <li>
            <a
              href="https://github.com/anasalqoyyum"
              target="_blank"
              rel="noopener noreferrer"
              className="kk-nav-link"
            >
              github ↗
            </a>
          </li>
        </ul>
      </nav>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="kk-hero">
        <h1 className="kk-hero-title">
          PROJECTS<span className="kk-dot">.</span>
        </h1>
        <p className="kk-hero-desc">
          A playground for tools, experiments, and whatever seems interesting enough to build.
          <em className="kk-hero-note">nb. kakane means "disappointment".</em>
        </p>
      </section>

      {/* ── Active Projects ─────────────────────────────── */}
      <section className="kk-section">
        <div className="kk-section-head">
          <span className="kk-section-num">01</span>
          <div className="kk-section-rule" />
          <span className="kk-section-label">active_projects</span>
        </div>
        <div className="kk-projects">
          {activeProjects.map((project) => (
            <div className="kk-project" key={project.name}>
              <div>
                <div className="kk-project-name">{project.name}</div>
                <div className="kk-project-desc">{project.desc}</div>
              </div>
              <div className="kk-project-actions">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kk-action"
                  >
                    live ↗
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kk-action"
                  >
                    src ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Archived Projects ───────────────────────────── */}
      <section className="kk-section">
        <div className="kk-section-head">
          <span className="kk-section-num">02</span>
          <div className="kk-section-rule" />
          <span className="kk-section-label">archived_projects</span>
        </div>
        <div className="kk-projects">
          {projects.map((project) => (
            <div className="kk-project" key={project.name}>
              <div>
                <div className="kk-project-name">{project.name}</div>
                <div className="kk-project-desc">{project.desc}</div>
              </div>
              <div className="kk-project-actions">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kk-action"
                  >
                    live ↗
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kk-action"
                  >
                    src ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── More ────────────────────────────────────────── */}
      <section className="kk-section">
        <div className="kk-section-head">
          <span className="kk-section-num">03</span>
          <div className="kk-section-rule" />
          <span className="kk-section-label">more</span>
        </div>
        <div className="kk-links">
          <a
            href="https://anasalqoyyum.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="kk-link"
          >
            <span className="kk-link-name">main_site</span>
            <div className="kk-link-dots" />
            <span className="kk-link-url">anasalqoyyum.dev ↗</span>
          </a>
          <a
            href="https://github.com/anasalqoyyum"
            target="_blank"
            rel="noopener noreferrer"
            className="kk-link"
          >
            <span className="kk-link-name">github</span>
            <div className="kk-link-dots" />
            <span className="kk-link-url">github.com/anasalqoyyum ↗</span>
          </a>
        </div>
      </section>

      {/* ── Fortune ─────────────────────────────────────── */}
      <div className="kk-fortune">
        <div className="kk-fortune-cmd">fortune | cowsay</div>
        {fortune && (
          <pre className="kk-fortune-text">{generateCowsay(fortune)}</pre>
        )}
      </div>

    </div>
  )
}
