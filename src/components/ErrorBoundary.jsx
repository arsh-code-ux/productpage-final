import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-red-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 border-2 border-red-200">
            <h1 className="text-2xl font-bold text-red-600 mb-4">⚠️ Something went wrong</h1>
            <p className="text-slate-700 mb-4">An error occurred while rendering the page.</p>
            <details className="bg-slate-50 p-4 rounded border border-slate-200 mb-4">
              <summary className="font-semibold text-slate-900 cursor-pointer mb-2">Error Details</summary>
              <pre className="text-xs text-red-600 overflow-auto max-h-48">
                {this.state.error && this.state.error.toString()}
              </pre>
              {this.state.errorInfo && (
                <pre className="text-xs text-slate-700 overflow-auto max-h-48 mt-2">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
