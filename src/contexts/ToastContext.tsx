import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Toast, ToastType } from '../components/Toast'

interface ToastContextType {
  showToast: (message: string, type: ToastType, duration?: number) => void
  toasts: Toast[]
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: ToastType, duration?: number) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      message,
      type,
      duration,
    }
    setToasts((prev) => [...prev, newToast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast, toasts, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}
