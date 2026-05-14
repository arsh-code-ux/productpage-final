import React, { useEffect, useRef } from 'react'

export default function WallHangedImage({ src, alt = 'Wall hung image', width = 400, height = 500 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current || !src) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Load image
    const img = new Image()
    img.crossOrigin = 'anonymous'
    
    img.onload = () => {
      // Create the wall-hung effect with frame
      const padding = 20
      const frameWidth = width - padding * 2
      const frameHeight = height - padding * 2
      
      // Draw background (wall color - light beige)
      ctx.fillStyle = '#f5f5f0'
      ctx.fillRect(0, 0, width, height)
      
      // Draw frame border (dark wood-like color)
      ctx.fillStyle = '#2a2a2a'
      ctx.fillRect(padding - 8, padding - 8, frameWidth + 16, frameHeight + 16)
      
      // Draw inner light border
      ctx.fillStyle = '#444444'
      ctx.fillRect(padding - 5, padding - 5, frameWidth + 10, frameHeight + 10)
      
      // Draw white mat/border inside frame
      ctx.fillStyle = '#ffffff'
      const matThickness = 15
      ctx.fillRect(padding, padding, frameWidth, frameHeight)
      
      // Calculate image dimensions to fit in the mat
      const maxWidth = frameWidth - matThickness * 2
      const maxHeight = frameHeight - matThickness * 2
      
      let imgWidth = maxWidth
      let imgHeight = (img.height / img.width) * imgWidth
      
      if (imgHeight > maxHeight) {
        imgHeight = maxHeight
        imgWidth = (img.width / img.height) * imgHeight
      }
      
      const imgX = padding + matThickness + (maxWidth - imgWidth) / 2
      const imgY = padding + matThickness + (maxHeight - imgHeight) / 2
      
      // Draw the actual image
      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight)
      
      // Add subtle shadow/depth effect at the bottom
      const shadowGradient = ctx.createLinearGradient(padding, padding + frameHeight - 10, padding, padding + frameHeight)
      shadowGradient.addColorStop(0, 'rgba(0,0,0,0)')
      shadowGradient.addColorStop(1, 'rgba(0,0,0,0.15)')
      ctx.fillStyle = shadowGradient
      ctx.fillRect(padding - 8, padding + frameHeight - 10, frameWidth + 16, 15)
    }
    
    img.src = src
  }, [src, width, height])

  return (
    <canvas
      ref={canvasRef}
      alt={alt}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block'
      }}
    />
  )
}
