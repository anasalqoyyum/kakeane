import {
  Code2,
  ExternalLink,
  FileArchive,
  GitGraph,
  Github,
  Globe,
  Terminal,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { activeProjects, projects } from '../constants/Projects'
import fortunes from '../constants/fortune-cookie.json'

const Cowsay = ({ text }: { text: string }) => {
  const bubbleWidth = Math.min(40, text.length + 4)
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
      {` ${'_'.repeat(bubbleWidth + 2)}\n`}
      {lines
        .map((line, _) => ` < ${line.padEnd(bubbleWidth, ' ')} >\n`)
        .join('')}
      {` ${'‾'.repeat(bubbleWidth + 2)}\n`}
      {'        \\   ^__^\n'}
      {'         \\  (oo)\\_______\n'}
      {'            (__)\\       )\\/\\\n'}
      {'                ||----w |\n'}
      {'                ||     ||\n'}
    </pre>
  )
}

const HomePage = () => {
  const [fortune, setFortune] = useState(fortunes[0])

  useEffect(() => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    setFortune(randomFortune)
  }, [])

  return (
    <div className="min-h-screen bg-[#282A36] text-[#F8F8F2] p-8 font-mono">
      <header className="mb-12">
        <h1 className="text-4xl mb-2 text-[#FF79C6]">~/kakeane-projects</h1>
        <p className="text-[#BD93F9]">$ cat description.md</p>
        <div className="ml-4 space-y-2">
          <p>
            Welcome to kakekane playground - a space where I document various
            experimental projects and random technical explorations.
          </p>
          <p>
            Here you'll find proof-of-concepts, tools in development, and
            half-baked ideas turned into (hopefully)-working prototypes.
          </p>
          <p>nb. kakekane means "disappointment"</p>
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
              <p className="text-[#F8F8F2]">No projects found.</p>
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
                      >
                        <ExternalLink size={18} className="ml-2" />
                      </a>
                    )}
                    {project?.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitGraph size={18} className="ml-2" />
                      </a>
                    )}
                  </h3>
                  <p className="text-[#F8F8F2] ml-4">{project.desc}</p>
                </div>
              ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 flex items-center text-[#50FA7B]">
            <FileArchive className="mr-2" />
            <span>past_projects/</span>
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
                      >
                        <ExternalLink size={18} className="ml-2" />
                      </a>
                    )}
                    {project?.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitGraph size={18} className="ml-2" />
                      </a>
                    )}
                  </h3>
                  <p className="text-[#F8F8F2] ml-4">{project.desc}</p>
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
              <Globe className="mr-2" />
              <span>website</span>
            </a>
            <a
              href="https://github.com/anasalqoyyum"
              className="flex items-center hover:text-[#FF79C6]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" />
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

export default HomePage
