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
  /** Exhibit category (from the sitemap). Also the title of its "more projects" page. */
  category: string
  /** URL slug for the category page: /category/<slug> */
  slug: string
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
    slug: 'columns-and-archways',
    title: 'Project Title',
    course: 'Course / Subject',
    description: 'Short description of this school project goes here.',
  },
  {
    term: 'Midterm',
    category: 'Materials and Craftsmanship',
    slug: 'materials-and-craftsmanship',
    title: 'Project Title',
    course: 'Course / Subject',
    description: 'Short description of this school project goes here.',
  },
  {
    term: 'Finals',
    category: 'Ancient, Modern',
    slug: 'ancient-modern',
    title: 'Project Title',
    course: 'Course / Subject',
    description: 'Short description of this school project goes here.',
  },
]

/** PLACEHOLDER — more school projects shown on each category page. Replace with real ones. */
export interface MoreProject {
  title: string
  course: string
  image?: string
}

export const moreProjects: MoreProject[] = Array.from({ length: 6 }, () => ({
  title: 'Project Title',
  course: 'Course / Subject',
}))
