import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale'
}

const ScrollAnimation = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('scroll-animate')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`scroll-${animation} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
