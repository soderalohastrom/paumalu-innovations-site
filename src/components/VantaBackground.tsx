import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    VANTA: any
    THREE: any
  }
}

interface VantaBackgroundProps {
  className?: string
  isDark?: boolean // Keep this prop for manual override if needed
}

export const VantaBackground: React.FC<VantaBackgroundProps> = ({ 
  className,
  isDark: forcedTheme
}) => {
  const vantaRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Check if scripts are loaded
  useEffect(() => {
    const checkScripts = () => {
      if (typeof window !== 'undefined' && window.VANTA && window.THREE) {
        setScriptsLoaded(true)
        console.log('✅ Vanta scripts loaded successfully')
      }
    }

    // Check immediately
    checkScripts()

    // Also check after a short delay to handle dynamic script loading
    const timeoutId = setTimeout(checkScripts, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  // Watch for theme changes using MutationObserver
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark')
          setIsDark(isDarkMode)
        }
      })
    })

    // Set initial theme
    const initialDark = forcedTheme ?? document.documentElement.classList.contains('dark')
    setIsDark(initialDark)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [forcedTheme])

  // Initialize vanta effect
  useEffect(() => {
    if (!scriptsLoaded || !containerRef.current || vantaRef.current) return

    try {
      const options = {
        el: containerRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark ? 0x303030 : 0xd4d4d4,
        shininess: isDark ? 0.25 : 0.15,
        waveHeight: isDark ? 40 : 30,
        waveSpeed: 0.35,
        zoom: 0.75,
        camera: {
          far: 1000,
          fov: 60,
          near: 50,
          x: -50,
          y: 100,
          z: 150,
          rotationX: 45,
          rotationY: 0,
          rotationZ: 0
        }
      }

      console.log('🌊 Initializing Vanta with color:', `#${options.color.toString(16)}`)
      vantaRef.current = window.VANTA.WAVES(options)

    } catch (error) {
      console.error('❌ Failed to initialize Vanta effect:', error)
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy()
        vantaRef.current = null
      }
    }
  }, [scriptsLoaded, isDark])

  // Update effect when theme changes
  useEffect(() => {
    if (!vantaRef.current) return

    const newColor = isDark ? 0x303030 : 0xd4d4d4
    console.log('🎨 Updating Vanta color to:', `#${newColor.toString(16)}`)
    
    try {
      vantaRef.current.setOptions({
        color: newColor,
        shininess: isDark ? 0.25 : 0.15,
        waveHeight: isDark ? 40 : 30,
      })
    } catch (error) {
      console.error('❌ Failed to update Vanta options:', error)
    }
  }, [isDark])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${className || ''}`}
      aria-hidden="true"
      style={{ opacity: isDark ? 0.9 : 0.8 }}
    />
  )
}
