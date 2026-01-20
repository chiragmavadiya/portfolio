import type { FC } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'

const WorkHistory: FC = () => {
  const workItems = [
    {
      title: 'Frontend Developer',
      certificate: 'Frontend Developer',
      duration: '2021 - 2026',
      description:
        'Frontend Developer at Zeronsec India Pvt. Ltd. (A product based company).',
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title text-center">Work History</h2>
          <p className="section-subtitle">
            Frontend Developer at Zeronsec India Pvt. Ltd.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="card bg-white">
            {workItems.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                  <div>
                    <h3 className="text-lg font-medium text-[#2B2B2B] mb-4">{item.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#767676]">Employee</span>
                      <span className="text-xs text-white bg-[#FFB400] px-3 py-1">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#2B2B2B] mb-4">{item.certificate}</h4>
                    <p className="text-sm text-[#767676] leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < workItems.length - 1 && <div className="border-t border-[#FAFAFA]" />}
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default WorkHistory
