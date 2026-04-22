/**
 * IMAGE UPLOAD & ORIENTATION DETECTION - DEMO GUIDE
 * ===================================================
 * 
 * This document explains how images are added to the system
 * and in what format they are stored/processed.
 */

// ==================== IMAGE UPLOAD FLOW ====================

/**
 * STEP 1: USER SELECTS IMAGE
 * - User clicks the "+ Add" button in the thumbnail gallery
 * - Browser's file picker opens
 * - Supported formats: JPEG, PNG, WebP, TIFF
 * - Max size: 50MB
 */

/**
 * STEP 2: IMAGE ANALYSIS
 * File: /src/services/imageService.js
 * Function: analyzeImageOrientation(imageFile)
 * 
 * Process:
 *   1. Read file using FileReader API
 *   2. Create Image object to load dimensions
 *   3. Calculate aspect ratio (width / height)
 *   4. Determine orientation based on ratio:
 *      - Portrait: aspectRatio < 0.8 (taller than wide)
 *      - Landscape: 1.2 < aspectRatio (wider than tall)
 *      - Wall Hanging: aspectRatio > 1.5 (very wide)
 *      - Square: 0.9 < aspectRatio < 1.1
 * 
 * Returns:
 * {
 *   orientation: "portrait" | "landscape" | "square" | "wall_hanging",
 *   displayType: string,
 *   width: number (in pixels),
 *   height: number (in pixels),
 *   aspectRatio: number (decimal),
 *   fileName: string,
 *   fileSize: number (in bytes),
 *   fileType: "image/jpeg" | "image/png" | etc,
 *   orientation_tag: "portrait" | "landscape" | etc
 * }
 */

// ==================== IMAGE OPTIMIZATION ====================

/**
 * STEP 3: IMAGE OPTIMIZATION
 * File: /src/services/imageService.js
 * Function: optimizeImageForUpload(imageFile, options)
 * 
 * Process:
 *   1. Resize image if it exceeds max dimensions (default: 2000x2000px)
 *   2. Compress image with quality setting (default: 0.85 or 85%)
 *   3. Convert to canvas and re-export as Blob
 *   4. Return optimized Blob object
 * 
 * Benefits:
 *   - Reduces file size by ~60-70%
 *   - Faster upload times
 *   - Standardized dimensions
 *   - Maintains quality at 85% compression
 */

// ==================== IMAGE PREVIEW ====================

/**
 * STEP 4: PREVIEW DISPLAY
 * In Upload Modal: /src/components/ProductDetail.jsx
 * 
 * Preview shows:
 *   1. Selected image (full preview)
 *   2. Detected orientation (auto-detected)
 *   3. Original dimensions (width × height in pixels)
 *   4. Aspect ratio (decimal value)
 * 
 * CSS Classes Applied Based on Orientation:
 *   - Portrait: h-[640px] md:h-[800px]
 *   - Landscape: h-[400px] md:h-[500px]
 *   - Square: h-[500px] md:h-[600px]
 *   - Wall Hanging: h-[300px] md:h-[350px]
 */

// ==================== IMAGE UPLOAD ====================

/**
 * STEP 5: UPLOAD TO BACKEND
 * File: /src/services/productService.js
 * Function: uploadProductImage(productId, imageBlob, orientationData)
 * 
 * API Endpoint:
 *   POST /api/products/:id/images
 * 
 * Request Format:
 *   Content-Type: multipart/form-data
 *   
 *   Form Fields:
 *   - image: File (optimized blob)
 *   - orientation: "portrait" | "landscape" | etc
 *   - displayType: string
 *   - width: number
 *   - height: number
 *   - aspectRatio: number
 *   
 * Authentication:
 *   - Requires Bearer token in Authorization header
 *   - Token stored in localStorage: localStorage.getItem('authToken')
 */

// ==================== BACKEND PROCESSING ====================

/**
 * STEP 6: BACKEND IMAGE STORAGE
 * 
 * Typical Backend Flow (Node.js/Express example):
 * 
 * 1. File Validation:
 *    - Check MIME type
 *    - Check file size
 *    - Verify dimensions match provided metadata
 * 
 * 2. Image Storage:
 *    - Save to cloud storage (AWS S3, Cloudinary, etc)
 *    - Or save to local /uploads directory
 *    - Generate unique filename with timestamp
 *    
 *    Example filename:
 *    artwork-prod123-portrait-1713600000.jpg
 * 
 * 3. Database Storage (MongoDB example):
 *    {
 *      _id: ObjectId,
 *      productId: "prod123",
 *      imageUrl: "https://cdn.example.com/artwork-prod123-portrait.jpg",
 *      imageId: "img-uuid-1234",
 *      orientation: "portrait",
 *      displayType: "portrait",
 *      width: 1200,
 *      height: 1600,
 *      aspectRatio: 0.75,
 *      fileSize: 245000,
 *      uploadedAt: "2026-04-20T15:21:00Z",
 *      uploadedBy: "user-uuid"
 *    }
 * 
 * 4. Generate Response:
 *    {
 *      success: true,
 *      imageUrl: "https://cdn.example.com/artwork-prod123-portrait.jpg",
 *      imageId: "img-uuid-1234",
 *      orientation: "portrait",
 *      message: "Image uploaded successfully"
 *    }
 */

// ==================== FRONTEND DISPLAY ====================

/**
 * STEP 7: DISPLAY IN GALLERY
 * 
 * After successful upload:
 *   1. New image added to thumbnails gallery
 *   2. Image displayed in main gallery view
 *   3. Styled based on detected orientation
 *   4. User can click thumbnail to view full image
 *   5. Zoom and magnifier features available
 */

// ==================== SUPPORTED IMAGE FORMATS ====================

/**
 * ACCEPTED FORMATS:
 * 
 * Format      | MIME Type           | Browsers      | Quality | Size
 * ------------|---------------------|---------------|---------|--------
 * JPEG        | image/jpeg          | All modern    | Good    | Small
 * PNG         | image/png           | All modern    | Lossless| Large
 * WebP        | image/webp          | Modern        | Excellent| Smaller
 * TIFF        | image/tiff          | Limited       | Lossless| Very Large
 * 
 * RECOMMENDED: WebP or JPEG for best balance
 */

// ==================== ORIENTATION DETECTION EXAMPLES ====================

/**
 * EXAMPLE 1: PORTRAIT PAINTING
 * Input:
 *   - Width: 1000px
 *   - Height: 1400px
 *   - Aspect Ratio: 0.714 (1000/1400)
 * 
 * Detection:
 *   - 0.714 < 0.8 = TRUE → PORTRAIT
 * 
 * CSS Classes:
 *   - h-[640px] md:h-[800px]
 * 
 * API Storage:
 *   {
 *     orientation: "portrait",
 *     displayType: "portrait",
 *     width: 1000,
 *     height: 1400,
 *     aspectRatio: 0.714
 *   }
 */

/**
 * EXAMPLE 2: LANDSCAPE PAINTING
 * Input:
 *   - Width: 2000px
 *   - Height: 1200px
 *   - Aspect Ratio: 1.667 (2000/1200)
 * 
 * Detection:
 *   - 1.667 > 1.2 AND 1.667 < 1.5 = FALSE
 *   - So: LANDSCAPE
 * 
 * CSS Classes:
 *   - h-[400px] md:h-[500px]
 * 
 * API Storage:
 *   {
 *     orientation: "landscape",
 *     displayType: "landscape",
 *     width: 2000,
 *     height: 1200,
 *     aspectRatio: 1.667
 *   }
 */

/**
 * EXAMPLE 3: WALL HANGING (Very Wide)
 * Input:
 *   - Width: 3000px
 *   - Height: 800px
 *   - Aspect Ratio: 3.75 (3000/800)
 * 
 * Detection:
 *   - 3.75 > 1.5 = TRUE → WALL_HANGING
 * 
 * CSS Classes:
 *   - h-[300px] md:h-[350px]
 * 
 * API Storage:
 *   {
 *     orientation: "wall_hanging",
 *     displayType: "wall_hanging",
 *     width: 3000,
 *     height: 800,
 *     aspectRatio: 3.75
 *   }
 */

/**
 * EXAMPLE 4: SQUARE PAINTING
 * Input:
 *   - Width: 1200px
 *   - Height: 1200px
 *   - Aspect Ratio: 1.0 (1200/1200)
 * 
 * Detection:
 *   - 0.9 < 1.0 < 1.1 = TRUE → SQUARE
 * 
 * CSS Classes:
 *   - h-[500px] md:h-[600px]
 * 
 * API Storage:
 *   {
 *     orientation: "square",
 *     displayType: "square",
 *     width: 1200,
 *     height: 1200,
 *     aspectRatio: 1.0
 *   }
 */

// ==================== FILE SIZE REDUCTION ====================

/**
 * COMPRESSION EXAMPLE:
 * 
 * Original File:
 *   - Size: 5.2 MB
 *   - Dimensions: 3000 × 4000px
 *   - Format: JPEG (original)
 * 
 * After Optimization:
 *   - Size: 1.3 MB (75% reduction)
 *   - Dimensions: 2000 × 2000px (resized)
 *   - Quality: 85% (imperceptible loss)
 *   - Format: JPEG
 * 
 * Benefits:
 *   - Upload 4x faster
 *   - Saves server storage
 *   - Faster loading for users
 *   - CDN bandwidth savings
 */

// ==================== CODE EXAMPLES ====================

/**
 * HOW TO USE IN REACT COMPONENT:
 * 
 * import { analyzeImageOrientation, optimizeImageForUpload, validateImage } 
 *   from '../services/imageService'
 * import productService from '../services/productService'
 * 
 * const handleImageUpload = async (file) => {
 *   // 1. Validate
 *   const { isValid, errors } = validateImage(file)
 *   if (!isValid) {
 *     console.error('Validation failed:', errors)
 *     return
 *   }
 * 
 *   // 2. Analyze orientation
 *   const orientationData = await analyzeImageOrientation(file)
 *   console.log('Detected orientation:', orientationData.orientation)
 *   console.log('Dimensions:', orientationData.width, 'x', orientationData.height)
 *   
 *   // 3. Optimize
 *   const optimizedBlob = await optimizeImageForUpload(file)
 *   console.log('Optimized size:', optimizedBlob.size, 'bytes')
 * 
 *   // 4. Upload
 *   const response = await productService.uploadProductImage(
 *     productId,
 *     optimizedBlob,
 *     orientationData
 *   )
 *   
 *   if (response.success) {
 *     console.log('✓ Image uploaded:', response.imageUrl)
 *     console.log('✓ Orientation:', response.orientation)
 *   }
 * }
 */

// ==================== ERROR HANDLING ====================

/**
 * VALIDATION ERRORS:
 * 
 * "File size exceeds 50MB limit"
 *   - Solution: Compress image before upload
 *   
 * "Invalid image format. Allowed: JPEG, PNG, WebP, TIFF"
 *   - Solution: Convert to JPEG or PNG
 *   
 * "Failed to load image"
 *   - Solution: File might be corrupted
 *   
 * "Authentication failed"
 *   - Solution: Login again, token might be expired
 */

// ==================== SUMMARY ====================

/**
 * COMPLETE FLOW:
 * 
 * User Selects Image
 *     ↓
 * Client Validates (size, type, format)
 *     ↓
 * Client Analyzes Orientation (portrait/landscape/square/wall-hanging)
 *     ↓
 * Client Optimizes Image (resize + compress)
 *     ↓
 * Client Displays Preview (with detected orientation)
 *     ↓
 * User Confirms & Uploads
 *     ↓
 * Backend Validates Again
 *     ↓
 * Backend Stores in Cloud/Local Storage
 *     ↓
 * Backend Saves Metadata to Database
 *     ↓
 * Backend Returns Image URL & Orientation
 *     ↓
 * Frontend Adds to Gallery
 *     ↓
 * Image Displays with Correct CSS Classes
 *     ↓
 * User Can View, Zoom, Share
 */

export default {
  title: "Image Upload & Orientation Detection",
  lastUpdated: "2026-04-20",
  version: "1.0.0"
}
