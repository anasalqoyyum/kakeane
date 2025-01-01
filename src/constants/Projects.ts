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
