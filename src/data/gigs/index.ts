import gig260919 from './260919'
import gig261107 from './261107'

export interface Gig {
  id: number
  title?: string
  date: string
  time?: string
  location: string
  status: 'upcoming' | 'past'
  posters?: string[]
}

const gigs: Gig[] = [gig260919, gig261107]

export default gigs
