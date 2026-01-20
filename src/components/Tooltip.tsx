import { type ReactNode } from 'react'
import type { FC } from 'react'

interface TooltipProps {
  text: string
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: FC<TooltipProps> = ({ text, children, position = 'top' }) => {
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-[#2B2B2B] border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-[#2B2B2B] border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-[#2B2B2B] border-t-transparent border-b-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-[#2B2B2B] border-t-transparent border-b-transparent border-l-transparent',
  }

  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute ${positionClasses[position]} opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50`}
      >
        <div className="bg-[#2B2B2B] text-white text-xs py-2 px-3 rounded whitespace-nowrap shadow-lg">
          {text}
          <div
            className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Tooltip
