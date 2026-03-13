import React, { useState, useEffect } from 'react'
import ImageGallery from './ImageGallery'
import ProductCard from './ProductCard'

export default function HeroSplit() {
  const [hideCard, setHideCard] = useState(false)

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideCard(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )

    // Find the ArtistSaga section - wait a bit for DOM to settle
    const findAndObserve = () => {
      const artistSection = document.querySelector('[data-artist-section]')
      if (artistSection) {
        observer.observe(artistSection)
        return true
      }
      return false
    }

    // Try to find immediately
    if (!findAndObserve()) {
      // If not found, try again after a short delay
      const timer = setTimeout(findAndObserve, 100)
      return () => clearTimeout(timer)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <ImageGallery />
      </div>
      <aside className="relative">
        <div className="sticky top-24">
          <ProductCard hidden={hideCard} />
        </div>
      </aside>
    </section>
  )
}
