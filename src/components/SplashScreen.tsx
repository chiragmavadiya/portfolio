import { useEffect, useState } from "react"

interface SplashScreenProps {
  onFinish: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState<boolean>(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1800)
    const timer2 = setTimeout(() => onFinish(), 2200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F0F0F6]
      transition-opacity duration-500
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Brand Circle */}
        <div className="w-20 h-20 rounded-full bg-black text-white
          flex items-center justify-center text-2xl font-semibold
          animate-pulse shadow-lg"
        >
          CM
        </div>

        {/* Name */}
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
          Chirag Mavadiya
        </h1>

        {/* Role */}
        <p className="text-sm text-gray-500 uppercase tracking-wider">
          Front-end Developer
        </p>
      </div>
    </div>
  )
}

export default SplashScreen
