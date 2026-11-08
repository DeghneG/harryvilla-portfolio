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
      'A compilation of my midterm outputs.',
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
  /** Optional video file in /public; plays in the larger view. */
  video?: string
  /** Optional link, e.g. the full PDF. */
  href?: string
}

const outputTitles = [
  'Programming Activity',
  'Web Design Output',
  'Database Exercise',
  'Networking Laboratory',
  'Systems Analysis Output',
  'Mobile App Prototype',
]

// Add your real outputs here. They appear first on each term's page, and you can
// step through them with the arrow buttons on the home page.
const realOutputs: Record<string, MoreProject[]> = {
  Prelim: [],
  Midterm: [
    {
      title: 'Scan Sync QR Code',
      course: 'BSIT 3-C · Midterm',
      image: '/Midterm/scan-sync-qr-code.png',
      href: '/Midterm/Villa_Infographic.pdf',
    },
    {
      title: 'A Day in the Life: Stickman',
      course: 'BSIT 3-C · Midterm',
      image: '/Midterm/a-day-in-the-life-stickman.png',
      href: '/Midterm/A_day_in_the_life_stickman.pdf',
    },
    {
      title: 'Campus Interview',
      course: 'BSIT 3-C · Midterm',
      video: '/Midterm/Messenger_creation_A31A8734-6CDD-42D8-AC62-A4F532F3E427.mp4',
    },
  ],
  Finals: [],
}

export const realOutputsFor = (term: string): MoreProject[] => realOutputs[term] ?? []

export const moreProjectsFor = (term: string): MoreProject[] => {
  const real = realOutputs[term] ?? []
  // Once a term has real outputs, show only those. Until then, show placeholders.
  if (real.length) return real
  return outputTitles.map((title) => ({ title, course: `BSIT 3-C · ${term}` }))
}

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
