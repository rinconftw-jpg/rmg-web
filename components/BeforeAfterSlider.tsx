'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface Props {
  before: string
  after: string
}

export default function BeforeAfterSlider({ before, after }: Props) {
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMouseDown  = (e: MouseEvent) => { e.preventDefault(); dragging.current = true }
    const onMouseMove  = (e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
    const onMouseUp    = () => { dragging.current = false }

    const onTouchStart = (e: TouchEvent) => {
      dragging.current = true
      updatePosition(e.touches[0].clientX)
    }
    const onTouchMove  = (e: TouchEvent) => {
      if (!dragging.current) return
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    }
    const onTouchEnd   = () => { dragging.current = false }

    container.addEventListener('mousedown',  onMouseDown)
    window.addEventListener('mousemove',     onMouseMove)
    window.addEventListener('mouseup',       onMouseUp)
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove',  onTouchMove,  { passive: false })
    container.addEventListener('touchend',   onTouchEnd)

    return () => {
      container.removeEventListener('mousedown',  onMouseDown)
      window.removeEventListener('mousemove',     onMouseMove)
      window.removeEventListener('mouseup',       onMouseUp)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove',  onTouchMove)
      container.removeEventListener('touchend',   onTouchEnd)
    }
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl select-none cursor-ew-resize"
    >
      {/* After — base layer */}
      <img
        src={after}
        alt="After"
        draggable={false}
          onDragStart={(e) => e.preventDefault()}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before — clipped to left side */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${position}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-xl pointer-events-none"
        style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4L2 9L6 14" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4L16 9L12 14" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase pointer-events-none">
        After
      </span>
    </div>
  )
}
