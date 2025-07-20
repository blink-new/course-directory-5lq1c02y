export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  institution: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  durationHours: number
  rating: number
  totalRatings: number
  enrollmentCount: number
  imageUrl: string
  courseUrl: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface CourseFilters {
  category?: string
  level?: string
  priceRange?: [number, number]
  durationRange?: [number, number]
  rating?: number
  institution?: string
}

export interface SearchParams {
  query?: string
  filters?: CourseFilters
  sortBy?: 'popularity' | 'rating' | 'price' | 'newest'
  sortOrder?: 'asc' | 'desc'
}