import type { AccentName } from './accents'

// Site copy comes from "Villa Portfolio Sitemap.pdf".
export const profile = {
  name: 'Harry Leonard Villa',
  tagline: 'Designing structure: ancient, modern',
  section: 'BSIT 3-C',
  email: 'hvilla@usa.edu.ph',
  facebook: 'https://www.facebook.com/',
  location: 'Iloilo City, Mandurriao',
  motto: 'I design and search for projects',
  philosophy: 'Combines historical weight with contemporary innovation.',
}

export interface Project {
  /** Accent color used for this exhibit. */
  accent: AccentName;
  term: 'Prelim' | 'Midterm' | 'Finals' | 'Capstone'
  /** Exhibit category (from the sitemap). Also the title of its "more projects" page. */
  category?: string
  /** URL slug for the category page: /category/<slug> */
  slug?: string
  /** PLACEHOLDER — replace with the real school project title. */
  title: string
  /** PLACEHOLDER — replace with the course / subject name. */
  course?: string
  /** PLACEHOLDER — replace with a short description of the project. */
  description?: string
  /** Set to a path in /public (e.g. "/projects/prelim.jpg") to replace the placeholder image. */
  image?: string
}

export const projects: Project[] = [
  {
    term: 'Prelim',
    accent: 'bronze',
    category: 'Columns and Archways',
    slug: 'columns-and-archways',
    title: 'Compilation of Prelim Outputs',
    course: 'BSIT 3-C · Information Technology',
    description:
      'A compilation of my prelim outputs from my IT courses: programming activities, laboratory exercises and web design projects.',
  },
  {
    term: 'Midterm',
    accent: 'steel',
    category: 'Materials and Craftsmanship',
    slug: 'materials-and-craftsmanship',
    title: 'Compilation of Midterm Outputs',
    course: 'BSIT 3-C · Information Technology',
    description:
      'A compilation of my midterm outputs from my IT courses: programming activities, laboratory exercises and web design projects.',
  },
  {
    term: 'Finals',
    accent: 'sage',
    category: 'Ancient, Modern',
    slug: 'ancient-modern',
    title: 'Compilation of Finals Outputs',
    course: 'BSIT 3-C · Information Technology',
    description:
      'A compilation of my finals outputs from my IT courses: programming activities, laboratory exercises and web design projects.',
  },
  {
    term: 'Capstone',
    accent: 'clay',
    title: 'CareSync: An Integrated Clinic Appointment, Medical Records, Billing, and Pharmacy Management System',
  },
]

/** PLACEHOLDER — more outputs shown on each category page. Replace titles with your real IT outputs. */
export interface MoreProject {
  title: string
  course: string
  image?: string
}

const outputTitles = [
  'Programming Activity',
  'Web Design Output',
  'Database Exercise',
  'Networking Laboratory',
  'Systems Analysis Output',
  'Mobile App Prototype',
]

export const moreProjectsFor = (term: string): MoreProject[] =>
  outputTitles.map((title) => ({ title, course: `BSIT 3-C · ${term}` }))

/** Edit these lists to match your own skills. */
export const technologies = [
  { id: 'frontend', label: 'Front End', accent: 'steel' as AccentName, items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { id: 'backend', label: 'Back End', accent: 'sage' as AccentName, items: ['Python', 'Java'] },
  {
    id: 'tools',
    label: 'Tools',
    accent: 'bronze' as AccentName,
    items: ['Git', 'GitHub', 'Antigravity', 'Canva', 'Adobe Illustrator', 'Stop Motion Studio', 'Vercel'],
  },
]

export const credentials = {
  standing: 'Third-year IT student',
  school: 'University of San Agustin',
  course: 'BSIT',
  education: [
    { level: 'Highschool', years: '2016–2022' },
    { level: 'Senior High', years: '2022–2024' },
    { level: 'College', years: '2024–Present' },
  ],
}
