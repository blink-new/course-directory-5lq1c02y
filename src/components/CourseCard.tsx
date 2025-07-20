import { Star, Clock, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Course } from '../types/course'

interface CourseCardProps {
  course: Course
  onClick: (course: Course) => void
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`
  }

  const formatEnrollment = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
    return count.toString()
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      onClick={() => onClick(course)}
    >
      <div className="relative">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getLevelColor(course.level)} border-0`}>
            {course.level}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {formatPrice(course.price)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Institution and Verification */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-primary">{course.institution}</span>
              {course.isVerified && (
                <CheckCircle className="h-4 w-4 text-blue-500" />
              )}
            </div>
            <Badge variant="outline" className="text-xs">
              {course.category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-sm text-gray-600">by {course.instructor}</p>

          {/* Rating and Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
              <span>({formatEnrollment(course.totalRatings)})</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.durationHours}h</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{formatEnrollment(course.enrollmentCount)}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}