import type { FC } from 'react'
import { useToast } from '../contexts/ToastContext'
import Toast from './Toast'

const ToastContainer: FC = () => {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col-reverse gap-3">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={removeToast} />
      ))}
    </div>
  )
}

export default ToastContainer
