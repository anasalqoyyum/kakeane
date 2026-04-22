export interface Project {
  name: string
  desc: string
  url?: string
  source?: string
}

export const projects: Project[] = [
  {
    name: 'Dead Simple Notes',
    desc: 'A simple markdown note taking app with a focus on speed and simplicity.',
    url: 'https://note.anasalqoyyum.dev',
    source: 'https://github.com/anasalqoyyum/notes',
  },
  {
    name: 'Vaultwarden [Cloud Exploration]',
    desc: 'A Gcloud (Serverless) exploration to deploy Bitwarden compatible server using Vaultwarden.',
    url: 'https://vault.anasalqoyyum.dev',
    source: 'https://github.com/dani-garcia/vaultwarden',
  },
  {
    name: 'Hikari',
    desc: 'Yet another customization frontend for video games with AIR movement. Private for privacy reasons (but can be shared as needed).',
  },
]

export const activeProjects: Project[] = [
  {
    name: 'ai-drew-toolbar',
    desc: 'Browser extension that lets developers inspect a live web app, select a UI element, and copy the relevant code context such as file paths, component names, and HTML structure for use with AI coding tools like Cursor, Claude Code, and GitHub Copilot.',
    source: 'https://github.com/anasalqoyyum/ai-drew-toolbar',
  },
  {
    name: 'msr-archiver',
    desc: 'Archive Arknights OSTs from monster-siren.hypergryph.com with album/song metadata, cover art, lyrics, and WAV-to-FLAC conversion using FFMPEG.',
    source: 'https://github.com/anasalqoyyum/msr-archiver',
  },
  {
    name: 'konasute-autoscener',
    desc: "OBS Auto Scene Switcher for Konami's Sound Voltex (Arcade & Konasute) using WebSocket to explore OBS WebSocket Plugin.",
    source: 'https://github.com/anasalqoyyum/konasute-autoscener',
  },
  {
    name: 'Ansible as a (reproducable) workstation environment',
    desc: 'Ansible playbook to setup new workstation (Mac & Linux) with all the necessary tools and configurations that I needed.',
    source: 'https://github.com/anasalqoyyum/ansible',
  },
]
