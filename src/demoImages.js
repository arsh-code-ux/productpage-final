// Demo images with different orientations
// These are used to show how the same image is displayed in different orientations

export const DEMO_IMAGES = [
  {
    id: 'demo-portrait-1',
    url: 'https://zigguratss.com/assets/upload/art-1155.jpg',
    orientation: 'portrait',
    style: 'Portrait - Tall & Elegant',
    dimensions: '1000 × 1400 px',
    description: 'Standing figure with butterflies'
  },
  {
    id: 'demo-landscape-1', 
    url: 'https://zigguratss.com/assets/upload/art-1155.jpg',
    orientation: 'landscape',
    style: 'Landscape - Wall Display',
    dimensions: '1400 × 1000 px',
    description: 'Horizontal wall presentation'
  },
  {
    id: 'demo-square-1',
    url: 'https://zigguratss.com/assets/upload/art-1155.jpg',
    orientation: 'square',
    style: 'Square - Perfect Balance',
    dimensions: '1000 × 1000 px',
    description: 'Centered composition'
  },
  {
    id: 'demo-wall-1',
    url: 'https://zigguratss.com/assets/upload/art-1155.jpg',
    orientation: 'wall_hanging',
    style: 'Wall Hanging - Panoramic',
    dimensions: '1500 × 700 px',
    description: 'Wide panoramic wall piece'
  }
]

export const getOrientationHeight = (orientation) => {
  const heights = {
    portrait: 'h-[640px] md:h-[800px]',
    landscape: 'h-[400px] md:h-[500px]',
    square: 'h-[500px] md:h-[600px]',
    wall_hanging: 'h-[300px] md:h-[350px]'
  }
  return heights[orientation] || heights.portrait
}

export const getOrientationBadge = (orientation) => {
  const badges = {
    portrait: { text: '📏 Portrait', color: 'bg-blue-100 text-blue-700' },
    landscape: { text: '📐 Landscape', color: 'bg-green-100 text-green-700' },
    square: { text: '⬜ Square', color: 'bg-purple-100 text-purple-700' },
    wall_hanging: { text: '🖼️ Wall Hanging', color: 'bg-amber-100 text-amber-700' }
  }
  return badges[orientation] || badges.portrait
}
