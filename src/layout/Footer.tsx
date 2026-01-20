import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#FAFAFA] border-t border-gray-200 z-30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center gap-2 py-4">
          <img src="/icons/copyright.svg" alt="copyright" className="w-5 h-5" />
          <p className="text-sm text-[#2B2B2B]">Copyright 2026. Chirag Mavadiya.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
