import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { Slider } from './ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { CourseFilters } from '../types/course'
import { categories, institutions } from '../data/mockCourses'

interface FilterSidebarProps {
  filters: CourseFilters
  onFiltersChange: (filters: CourseFilters) => void
  onClose?: () => void
  className?: string
}

export function FilterSidebar({ filters, onFiltersChange, onClose, className = '' }: FilterSidebarProps) {
  const levels = ['Beginner', 'Intermediate', 'Advanced']
  const priceRange = filters.priceRange || [0, 200]
  const durationRange = filters.durationRange || [0, 100]

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: category === 'All Categories' ? undefined : category
    })
  }

  const handleLevelChange = (level: string, checked: boolean) => {
    onFiltersChange({
      ...filters,
      level: checked ? level : undefined
    })
  }

  const handleInstitutionChange = (institution: string) => {
    onFiltersChange({
      ...filters,
      institution: institution === 'All Institutions' ? undefined : institution
    })
  }

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      priceRange: [value[0], value[1]]
    })
  }

  const handleDurationRangeChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      durationRange: [value[0], value[1]]
    })
  }

  const handleRatingChange = (rating: string) => {
    onFiltersChange({
      ...filters,
      rating: rating === 'all' ? undefined : parseFloat(rating)
    })
  }

  const clearFilters = () => {
    onFiltersChange({})
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Mobile close button */}
      {onClose && (
        <div className="flex items-center justify-between md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Clear Filters */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
          Clear all
        </Button>
      </div>

      {/* Category Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Select
            value={filters.category || 'All Categories'}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Level Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={filters.level === level}
                onCheckedChange={(checked) => handleLevelChange(level, checked as boolean)}
              />
              <Label htmlFor={level} className="text-sm">
                {level}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Institution Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Institution</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={filters.institution || 'All Institutions'}
            onValueChange={handleInstitutionChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {institutions.map((institution) => (
                <SelectItem key={institution} value={institution}>
                  {institution}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Price Range Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={handlePriceRangeChange}
            max={200}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Duration Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Duration (hours)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={durationRange}
            onValueChange={handleDurationRangeChange}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{durationRange[0]}h</span>
            <span>{durationRange[1]}h</span>
          </div>
        </CardContent>
      </Card>

      {/* Rating Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={filters.rating?.toString() || 'all'}
            onValueChange={handleRatingChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ratings</SelectItem>
              <SelectItem value="4.5">4.5+ Stars</SelectItem>
              <SelectItem value="4.0">4.0+ Stars</SelectItem>
              <SelectItem value="3.5">3.5+ Stars</SelectItem>
              <SelectItem value="3.0">3.0+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  )
}