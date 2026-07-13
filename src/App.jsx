import { useEffect, useRef, useState } from 'react'
import './index.css'

function App() {
  const turnstileRef = useRef(null)
  const widgetId = useRef(null)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current && widgetId.current === null) {
        widgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAAD00HG4oCD3LiqmR',
          callback: (token) => {
            console.log('Turnstile token:', token)
            setVerified(true)
          },
          'error-callback': () => {
            setVerified(false)
          },
          'expired-callback': () => {
            setVerified(false)
          },
          theme: 'light',
        })
      }
    }

    // Wait for Turnstile script to load
    if (window.turnstile) {
      renderWidget()
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          renderWidget()
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="page">
      <div className="turnstile-wrapper">
        <div ref={turnstileRef} />
      </div>
    </div>
  )
}

export default App
