import { Search, Menu, BookOpen } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onMenuClick: () => void
}

export function Header({ searchQuery, onSearchChange, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-gray-900">CourseHub</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Browse
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 w-full"
            />
          </div>
        </div>
      </div>
    </header>
  )
}