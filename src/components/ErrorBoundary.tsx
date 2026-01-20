import { Component, type ReactNode, type ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F0F6] px-6">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#2B2B2B] mb-4">
              Something went wrong
            </h2>
            <p className="text-[#767676] mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-[#767676] mb-2">
                  Error details (development only)
                </summary>
                <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto max-h-40 text-red-600">
                  {this.state.error.toString()}
                  {this.state.error.stack && `\n${this.state.error.stack}`}
                </pre>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="btn-primary"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-200 text-[#2B2B2B] font-semibold uppercase hover:bg-gray-300 transition-all duration-300 rounded"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
