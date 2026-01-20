import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

    if (!GA_MEASUREMENT_ID) {
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)

    // Make gtag available globally
    window.gtag = gtag
  }, [])

  return null
}

export default GoogleAnalytics
