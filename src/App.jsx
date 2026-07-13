import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('idle') // idle | checking | verified

  const handleCheck = (e) => {
    if (e.target.checked && status === 'idle') {
      setStatus('checking')
      setTimeout(() => {
        setStatus('verified')
      }, 1200)
    }
  }

  return (
    <div className="captcha-box">
      <div className="left-side">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="captchaCheck"
            onChange={handleCheck}
            disabled={status === 'checking' || status === 'verified'}
            checked={status === 'verified'}
          />
          <div className={`custom-checkbox ${status === 'checking' ? 'hiding' : ''}`}>
            {status === 'verified' && <span className="checkmark">✔</span>}
          </div>
          {status === 'checking' && <div className="spinner" />}
        </div>
        {status === 'verified' ? (
          <span className="verified-text">✔ Vérifié</span>
        ) : (
          <span className="label-text">Je ne suis pas un robot</span>
        )}
      </div>

      <div className="right-side">
        <svg className="recaptcha-logo" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#4a90d9" opacity="0.15"/>
          <path d="M32 10 C20 10, 10 20, 10 32 C10 44, 20 54, 32 54 C44 54, 54 44, 54 32 C54 20, 44 10, 32 10Z"
                stroke="#4a90d9" strokeWidth="3" fill="none"/>
          <path d="M22 32 L28 38 L42 24" stroke="#4a90d9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="brand-name">reCAPTCHA</span>
        <span className="brand-sub">Confidentialité · Conditions</span>
      </div>
    </div>
  )
}

export default App
