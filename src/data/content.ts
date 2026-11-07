// Site copy comes from "Villa Portfolio Sitemap.pdf".
export const profile = {
  name: 'Harry Leonard Villa',
  tagline: 'Designing structure: ancient, modern',
  section: 'BSIT 3-C',
  email: 'hvilla@usa.edu.ph',
  facebook: 'https://www.facebook.com/',
  philosophy: 'Combines historical weight with contemporary innovation.',
}

export const categories = [
  { id: 'ancient', title: 'Ancient Architecture' },
  { id: 'modern', title: 'Modern Architecture' },
]

export interface Project {
  term: 'Prelim' | 'Midterm' | 'Finals'
  /** Exhibit category (from the sitemap). */
  category: string
  /** PLACEHOLDER — replace with the real school project title. */
  title: string
  /** PLACEHOLDER — replace with the course / subject name. */
  course: string
  /** PLACEHOLDER — replace with a short description of the project. */
  description: string
  /** Set to a path in /public (e.g. "/projects/prelim.jpg") to replace the placeholder image. */
  image?: string
}

export const projects: Project[] = [
  {
    term: 'Prelim',
    category: 'Columns and Archways',
    title: 'Project Title',
    course: 'Course / Subject',
    description: 'Short description of this school project goes here.',
  },
  {
    term: 'Midterm',
    category: 'Materials and Craftsmanship',
    title: 'Project Title',
    course: 'Course / Subject',
    description: 'Short description of this school project goes here.',
  },
  {
    term: 'Finals',
    category: 'Ancient, Modern',
    title: 'Project Title',
    course: 'Course / Subject',
    description: 'Short description of this school project goes here.',
  },
]
