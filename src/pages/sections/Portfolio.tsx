import type { FC } from 'react'
import { useState } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'

const Portfolio: FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['All Categories', 'UI Design', 'Web Templates', 'Logo', 'Branding']

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title text-center">Portfolio</h2>
          <p className="section-subtitle">
            Explore my collection of projects showcasing expertise in React.js, modern web development, and UI/UX design. 
            Each project demonstrates technical skills, problem-solving abilities, and attention to detail.
          </p>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter.toLowerCase().replace(' ', '-'))}
                className={`text-base font-medium capitalize transition-colors ${
                  (index === 0 && activeFilter === 'all') ||
                  filter.toLowerCase().replace(' ', '-') === activeFilter
                    ? 'text-[#FFB400]'
                    : 'text-[#2B2B2B] hover:text-[#FFB400]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Portfolio Grid */}
        <ScrollAnimation animation="scale" delay={300}>
          <div className="w-full">
            <img
              src="/images/portfolio-grid.svg"
              alt="Portfolio Grid"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Portfolio
