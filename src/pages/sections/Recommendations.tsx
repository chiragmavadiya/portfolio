import type { FC } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'

const Recommendations: FC = () => {
  const testimonials = [
    {
      name: 'James Gouse',
      role: 'Graphic Designer',
      image: '/images/testimonial-james.jpg',
      rating: 5,
      title: 'Great Quality!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    },
    {
      name: 'Tiana Philips',
      role: 'Photographer',
      image: '/images/testimonial-tiana.jpg',
      rating: 5,
      title: 'Amazing Work!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    },
    {
      name: 'Talan Westervelt',
      role: 'Business Man',
      image: '/images/testimonial-talan.jpg',
      rating: 5,
      title: 'Great Quality!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    },
  ]

  return (
    <section id="recommendations" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title text-center">Recommendations</h2>
          <p className="section-subtitle">
            Client testimonials and recommendations from professionals I've worked with. 
            These reviews reflect the quality of work and dedication to delivering exceptional results.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="scroll-delay-1"
            >
              <div className="card bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <img key={i} src="/icons/star.svg" alt="star" className="w-4 h-4" />
                  ))}
                </div>
                <h3 className="text-lg font-medium text-[#2B2B2B] mb-3">{testimonial.title}</h3>
                <p className="text-sm text-[#767676] mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-base font-medium text-[#2B2B2B]">{testimonial.name}</h4>
                    <p className="text-sm text-[#767676]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Pagination Dots */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFB400]" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Recommendations
