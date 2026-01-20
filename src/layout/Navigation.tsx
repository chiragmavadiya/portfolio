import type { FC } from 'react'
import { useNavigation } from '../hooks/useNavigation'

const Navigation: FC = () => {
  const { activeSection, scrollToSection } = useNavigation()

  const navItems = [
    { id: 'home', label: 'Home', icon: '/icons/home.svg' },
    { id: 'services', label: 'Services', icon: '/icons/service.svg' },
    // { id: 'cv', label: 'CV', icon: '/icons/cv.svg' },
    // { id: 'portfolio', label: 'Portfolio', icon: '/icons/portfolio-icon.svg' },
    { id: 'blog', label: 'Product Highlight', icon: '/icons/blog.svg' },
    { id: 'contact', label: 'Contact', icon: '/icons/contact.svg' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#FAFAFA] z-40 nav-entrance hidden lg:block">
      <div className="h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-center lg:justify-end gap-4 lg:gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all group relative cursor-pointer ${
              activeSection === item.id
                ? 'bg-[#FFB400] text-[#2B2B2B]'
                : 'text-[#767676] hover:bg-gray-100 hover:text-[#2B2B2B]'
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`w-5 h-5 ${activeSection === item.id ? '' : 'opacity-60 group-hover:opacity-100'}`}
            />
            <span className="text-sm font-medium hidden sm:inline-block">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
