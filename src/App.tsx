import { useState, Suspense, lazy } from "react"
import Sidebar from "./layout/Sidebar"
import Navigation from "./layout/Navigation"
import Footer from "./layout/Footer"
import ToastContainer from "./components/ToastContainer"
import SplashScreen from "./components/SplashScreen"
import ScrollToTop from "./components/ScrollToTop"
import GoogleAnalytics from "./components/GoogleAnalytics"
import ErrorBoundary from "./components/ErrorBoundary"

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"))
const Contact = lazy(() => import("./pages/Contact"))

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#F0F0F6]">
        <GoogleAnalytics />
        <ErrorBoundary>
          <Sidebar />
        </ErrorBoundary>
        <ErrorBoundary>
          <Navigation />
        </ErrorBoundary>
        <ToastContainer />
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </ErrorBoundary>

        <main className="lg:ml-80 pt-24 lg:pt-16 pb-20">
          <ErrorBoundary>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-[#F0F0F6]">
                <div className="flex flex-col items-center gap-4">
                  <svg
                    className="animate-spin h-12 w-12 text-[#FFB400]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <p className="text-[#767676] text-sm">Loading...</p>
                </div>
              </div>
            }>
              <Home />
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
