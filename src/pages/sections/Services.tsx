import type { FC } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'
import { useNavigation } from '../../hooks/useNavigation'

const Services: FC = () => {
  const { scrollToSection } = useNavigation()

  const services = [
    {
      icon: '/icons/web-development.svg',
      title: 'Web Development',
      description: 'Building responsive, scalable web applications using React.js, TypeScript, and modern JavaScript. Specialized in creating high-performance single-page applications, e-commerce platforms, and content management systems with clean, maintainable code.',
    },
    {
      icon: '/icons/ui-design.svg',
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces that enhance user experience. Creating wireframes, prototypes, and implementing pixel-perfect designs using modern design principles and best practices for optimal user engagement.',
    },
    {
      icon: '/icons/game-development.svg',
      title: 'Product Development',
      description: 'Leading end-to-end product development from concept to deployment. Managing product lifecycles, collaborating with cross-functional teams, and delivering secure, scalable solutions that meet business objectives and user needs.',
    },
  ]

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title text-center">My Services</h2>
          <p className="section-subtitle">
            I specialize in building scalable, high-performance web applications using React.js and modern JavaScript.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="scroll-delay-1"
            >
              <div 
                className="card card-hover text-center p-8 bg-white cursor-pointer h-full flex flex-col"
                onClick={() => scrollToSection('contact')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    scrollToSection('contact')
                  }
                }}
              >
                <div className="flex justify-center mb-6">
                  <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-medium text-[#2B2B2B] capitalize mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#767676] flex-1">{service.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
