import { useState, useEffect } from 'react'
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award,
  Search,
  ChevronRight,
  BookOpen,
  Building,
  Clock,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { blink } from './blink/client'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Auth state management
  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  const familiasProfesionales = [
    {
      name: "Informática y Comunicaciones",
      icon: "💻",
      courses: 12,
      description: "Desarrollo de aplicaciones, sistemas informáticos, redes",
      color: "bg-blue-500"
    },
    {
      name: "Sanidad",
      icon: "🏥",
      courses: 8,
      description: "Técnicos en salud, laboratorio, imagen diagnóstica",
      color: "bg-green-500"
    },
    {
      name: "Administración y Gestión",
      icon: "📊",
      courses: 6,
      description: "Administración, finanzas, recursos humanos",
      color: "bg-purple-500"
    },
    {
      name: "Servicios Socioculturales",
      icon: "👥",
      courses: 5,
      description: "Educación infantil, integración social, animación",
      color: "bg-orange-500"
    },
    {
      name: "Imagen Personal",
      icon: "✨",
      courses: 4,
      description: "Estética, peluquería, asesoría de imagen",
      color: "bg-pink-500"
    },
    {
      name: "Hostelería y Turismo",
      icon: "🏨",
      courses: 7,
      description: "Gestión hotelera, turismo, restauración",
      color: "bg-yellow-500"
    },
    {
      name: "Actividades Físicas y Deportivas",
      icon: "⚽",
      courses: 3,
      description: "Animación deportiva, acondicionamiento físico",
      color: "bg-red-500"
    },
    {
      name: "Comercio y Marketing",
      icon: "🛍️",
      courses: 5,
      description: "Marketing, comercio internacional, ventas",
      color: "bg-indigo-500"
    }
  ]

  const cursosDestacados = [
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institution: "IES Tecnológico",
      duration: "2000 horas",
      rating: 4.8,
      students: 1250,
      category: "Informática",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Técnico Superior en Educación Infantil",
      institution: "Centro de Formación Social",
      duration: "2000 horas",
      rating: 4.9,
      students: 980,
      category: "Servicios Socioculturales",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop"
    },
    {
      title: "Técnico Superior en Administración y Finanzas",
      institution: "Escuela de Negocios",
      duration: "2000 horas",
      rating: 4.7,
      students: 1100,
      category: "Administración",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    }
  ]

  const blogPosts = [
    {
      title: "Descubre cómo la FP de Grado Superior puede cambiar tu futuro",
      excerpt: "La Formación Profesional está experimentando un crecimiento sin precedentes en España...",
      date: "15 Jul 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
    },
    {
      title: "¿Por qué FP Grado Superior es la elección de los expertos?",
      excerpt: "Los profesionales del sector educativo recomiendan cada vez más la FP como alternativa...",
      date: "12 Jul 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: "10 secretos sobre FP Grado Superior que nadie te contará",
      excerpt: "Conoce los aspectos menos conocidos pero más importantes de la Formación Profesional...",
      date: "10 Jul 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold text-gray-900">FP Grado Superior</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Familias</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Todos los cursos</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Información</a>
              {user ? (
                <Button variant="outline" onClick={() => blink.auth.logout()}>
                  Cerrar Sesión
                </Button>
              ) : (
                <Button onClick={() => blink.auth.login()}>
                  Acceder
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Familias</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Todos los cursos</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Blog</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Información</a>
                <div className="px-3 py-2">
                  {user ? (
                    <Button variant="outline" onClick={() => blink.auth.logout()} className="w-full">
                      Cerrar Sesión
                    </Button>
                  ) : (
                    <Button onClick={() => blink.auth.login()} className="w-full">
                      Acceder
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Descubre el auge de la<br />
              <span className="text-yellow-400">Formación Profesional</span><br />
              en España
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Un futuro brillante te espera con más de 507.335 estudiantes ya matriculados
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Buscar cursos, familias profesionales..."
                  className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur border-0 rounded-full shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6">
                  Buscar
                </Button>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg rounded-full">
              Pedir información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">507.335</div>
              <div className="text-gray-600">Estudiantes FP Superior</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">43,3%</div>
              <div className="text-gray-600">Crecimiento en 5 años</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3.871</div>
              <div className="text-gray-600">Centros docentes</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">985.431</div>
              <div className="text-gray-600">Total estudiantes FP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Familias Profesionales */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Familias Profesionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora las diferentes áreas de conocimiento y encuentra tu vocación profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familiasProfesionales.map((familia, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${familia.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{familia.icon}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {familia.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-3">{familia.description}</p>
                  <Badge variant="secondary" className="bg-gray-100">
                    {familia.courses} cursos
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Ver todas las familias
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cursos Destacados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cursos Más Populares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los grados superiores con mayor demanda y mejores perspectivas laborales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosDestacados.map((curso, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md">
                <div className="relative overflow-hidden">
                  <img 
                    src={curso.image} 
                    alt={curso.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-900 shadow-md">
                      {curso.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {curso.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{curso.institution}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {curso.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {curso.students} estudiantes
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{curso.rating}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                      Ver detalles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Ver todos los cursos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Últimas Noticias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado sobre las últimas tendencias en Formación Profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Ver más artículos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para cambiar tu futuro?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            La Formación Profesional te está esperando. Descubre los programas disponibles y prepárate para un futuro lleno de oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Pedir información
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
              Explorar cursos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <span className="text-xl font-bold">FP Grado Superior</span>
              </div>
              <p className="text-gray-400 mb-4">
                Tu guía completa para la Formación Profesional de Grado Superior en España.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Informática</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sanidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Administración</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Educación Infantil</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Información</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pruebas Libres</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organismos Oficiales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Glosario</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FP Grado Superior. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App