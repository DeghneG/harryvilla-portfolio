// All copy comes from "Villa Portfolio Sitemap.pdf".
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

export type PlateKind = 'arches' | 'columns' | 'materials' | 'blend'

// Prelim / Midterm / Finals titles requested by the user, paired with the PDF's exhibits.
export const projects = [
  { term: 'Prelim', title: 'Columns and Archways', kind: 'arches' as PlateKind },
  { term: 'Midterm', title: 'Materials and Craftsmanship', kind: 'materials' as PlateKind },
  { term: 'Finals', title: 'Ancient, Modern', kind: 'blend' as PlateKind },
]
