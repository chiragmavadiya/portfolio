import { Suspense, lazy } from 'react'
import type { FC } from 'react'
import Hero from './sections/Hero'
import ErrorBoundary from '../components/ErrorBoundary'

// Lazy load sections for code splitting (Hero loads immediately as it's above the fold)
const Services = lazy(() => import('./sections/Services'))
const Education = lazy(() => import('./sections/Education'))
const WorkHistory = lazy(() => import('./sections/WorkHistory'))
const Blog = lazy(() => import('./sections/Blog'))

// Loading fallback component
const SectionLoader: FC = () => {
  return (
    <div className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

const Home: FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <Education />
          <WorkHistory />
          <Blog />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Home
