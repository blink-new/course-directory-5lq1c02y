import { Star, Clock, Users, CheckCircle, ExternalLink, BookOpen, Award } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { Course } from '../types/course'

interface CourseDetailModalProps {
  course: Course | null
  isOpen: boolean
  onClose: () => void
}

export function CourseDetailModal({ course, isOpen, onClose }: CourseDetailModalProps) {
  if (!course) return null

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{course.title}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Image and Basic Info */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-3 left-3">
                <Badge className={`${getLevelColor(course.level)} border-0`}>
                  {course.level}
                </Badge>
              </div>
            </div>

            {/* Institution and Verification */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-primary">{course.institution}</span>
                {course.isVerified && (
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                )}
              </div>
              <Badge variant="outline">
                {course.category}
              </Badge>
            </div>

            {/* Instructor */}
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">Instructor: <span className="font-medium">{course.instructor}</span></span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-600">({formatEnrollment(course.totalRatings)} reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{formatEnrollment(course.enrollmentCount)} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{course.durationHours} hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Online Course</span>
              </div>
            </div>
          </div>

          {/* Right Column - Description and Actions */}
          <div className="space-y-6">
            {/* Price */}
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {formatPrice(course.price)}
              </div>
              {course.price > 0 && (
                <p className="text-sm text-gray-600">One-time payment</p>
              )}
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-3">About this course</h3>
              <p className="text-gray-700 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* What you'll learn */}
            <div>
              <h3 className="font-semibold mb-3">What you'll learn</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Master the fundamentals and advanced concepts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Build real-world projects and applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Get hands-on experience with industry tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Receive certificate of completion</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => window.open(course.courseUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Enroll Now
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Add to Wishlist
              </Button>
            </div>

            {/* Course Details */}
            <div className="text-xs text-gray-500 space-y-1">
              <p>Created: {new Date(course.createdAt).toLocaleDateString()}</p>
              <p>Last updated: {new Date(course.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}