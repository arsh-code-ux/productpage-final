import AboutPage from './components/AboutPage'
import ProductPage from './components/ProductPage'
import HighEndProductExperience from './components/HighEndProductExperience'
import ArtistPage from './components/ArtistPage'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  console.log('✓ App component mounted')
  const path = window.location.pathname.replace(/\/$/, '')
  
  // Route handling
  if (path === '/product' || path === '') return (
    <ErrorBoundary>
      <ProductPage />
    </ErrorBoundary>
  )
  if (path === '/luxury') return (
    <ErrorBoundary>
      <HighEndProductExperience />
    </ErrorBoundary>
  )
  if (path === '/artist') return (
    <ErrorBoundary>
      <ArtistPage />
    </ErrorBoundary>
  )
  if (path === '/about') return (
    <ErrorBoundary>
      <AboutPage />
    </ErrorBoundary>
  )
  
  // Default to ProductPage for any other route
  return (
    <ErrorBoundary>
      <ProductPage />
    </ErrorBoundary>
  )
}

export default App
