import {
  Code2,
  ExternalLink,
  FileArchive,
  GitGraph,
  Globe,
  Terminal,
} from 'lucide-react'
import { activeProjects, projects } from '../constants/Projects'
import fortunes from '../constants/fortune-cookie.json'
import { useState, useEffect } from 'react'

interface Props {
  ran: number
}

const Cowsay = ({ text }: { text: string }) => {
  const bubbleWidth = Math.min(25, text.length + 4)
  // wrap text at spaces
  const wrapText = (text: string, maxWidth: number): string[] => {
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine = ''

    for (const word of words) {
      if ((currentLine + word).length > maxWidth) {
        lines.push(currentLine.trim())
        currentLine = ''
      }
      currentLine += `${word} `
    }

    if (currentLine.trim().length > 0) {
      lines.push(currentLine.trim())
    }

    return lines
  }

  const lines = wrapText(text, bubbleWidth)

  return (
    <pre className="text-[#BD93F9]">
      {` ${'-'.repeat(bubbleWidth + 4)}\n`}
      {lines
        .map((line, _) => ` < ${line.padEnd(bubbleWidth, ' ')} >\n`)
        .join('')}
      {` ${'-'.repeat(bubbleWidth + 4)}\n`}
      {'        \\   ^__^\n'}
      {'         \\  (oo)\\_______\n'}
      {'            (__)\\       )\\/\\\n'}
      {'                ||----w |\n'}
      {'                ||     ||\n'}
    </pre>
  )
}

export const HomePage = ({ ran }: Props) => {
  const [fortune, setFortune] = useState(fortunes[ran])

  useEffect(() => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    setFortune(randomFortune)
  }, [])

  return (
    <div className="min-h-screen bg-[#282A36] text-[#F8F8F2] p-8 font-mono">
      <header className="mb-12">
        <h1 className="text-4xl mb-2 text-[#FF79C6]">~/kakekane-projects</h1>
        <p className="text-[#BD93F9] py-2">$ cat description.md</p>
        <div className="ml-4 space-y-2">
          <p>
            Welcome to kakekane playground - a space where I document various
            experimental projects and random technical explorations.
          </p>
          <p>
            Here you'll find proof-of-concepts, tools in development, and
            half-baked ideas turned into (hopefully)-working prototypes.
          </p>
          <p>nb. kakekane means "disappointment".</p>
        </div>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl mb-4 flex items-center text-[#50FA7B]">
            <Code2 className="mr-2" />
            <span>active_projects/</span>
          </h2>
          <div className="grid gap-4">
            {activeProjects.length === 0 && (
              <p className="text-[#F8F8F2]">No active projects found.</p>
            )}
            {activeProjects.length >= 1 &&
              activeProjects.map((project) => (
                <div
                  key={project.name}
                  className="border border-[#44475A] p-4 hover:bg-[#44475A]"
                >
                  <h3 className="text-xl mb-2 text-[#FF79C6] flex align-middle items-center">
                    $ {project.name}
                    {project.url && (
                      <a
                        href={project?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:border-b hover:border-b-[#FF79C6] pb-0.5"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h3>
                  <p className="text-[#F8F8F2] ml-4">{project.desc}</p>
                  {project?.source && (
                    <p className="mt-3">
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 hover:border-b hover:border-b-[#FF79C6] pb-0.5 text-[#FF79C6]"
                      >
                        Source
                      </a>
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 flex items-center text-[#50FA7B]">
            <FileArchive className="mr-2" />
            <span>archived_projects/</span>
          </h2>
          <div className="grid gap-4">
            {projects.length === 0 && (
              <p className="text-[#F8F8F2]">No projects found.</p>
            )}
            {projects.length >= 1 &&
              projects.map((project) => (
                <div
                  key={project.name}
                  className="border border-[#44475A] p-4 hover:bg-[#44475A]"
                >
                  <h3 className="text-xl mb-2 text-[#FF79C6] flex align-middle items-center">
                    $ {project.name}
                    {project.url && (
                      <a
                        href={project?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:border-b hover:border-b-[#FF79C6] pb-0.5"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h3>
                  <p className="text-[#F8F8F2] ml-4">{project.desc}</p>
                  {project?.source && (
                    <p className="mt-3">
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 hover:border-b hover:border-b-[#FF79C6] pb-0.5 text-[#FF79C6]"
                      >
                        Source
                      </a>
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-4 flex items-center text-[#50FA7B]">
            <Terminal className="mr-2" />
            <span>more/</span>
          </h2>
          <div className="flex gap-4">
            <a
              href="https://anasalqoyyum.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#FF79C6]"
            >
              <Globe className="mr-2" size={20} />
              <span>main_site</span>
            </a>
            <a
              href="https://github.com/anasalqoyyum"
              className="flex items-center hover:text-[#FF79C6]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitGraph className="mr-2" size={20} />
              <span>github</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-12 pt-8 border-t border-[#44475A]">
        <p className="text-[#BD93F9]">$ fortune | cowsay</p>
        <Cowsay text={fortune} />
      </footer>
    </div>
  )
}
