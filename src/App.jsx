import { useState, useEffect } from 'react'
import { ShieldCheck, Lock } from 'lucide-react'

function App() {
  // 'idle' | 'verifying' | 'verified'
  const [status, setStatus] = useState('idle')

  const handleVerify = () => {
    if (status !== 'idle') return
    setStatus('verifying')
    
    // Simulate verification delay
    setTimeout(() => {
      setStatus('verified')
    }, 1500)
  };

  useEffect(() => {
    if (status === 'verified') {
      // Redirect to the smart link after showing success state
      const timer = setTimeout(() => {
        window.location.href = 'https://guyprior.com/iv4s6uai?key=eb87731ce0c5ba0385ec684ed5c000c0'
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0a0715] via-[#200b3b] via-[#091535] via-[#1b082e] to-[#0a0715] animate-gradient p-4 select-none">
      
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Modern minimal glass card */}
      <div className="relative bg-slate-950/40 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col items-center max-w-sm w-full text-center transition-all duration-300 hover:border-white/15">
        
        {/* Shield verification icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
          <div className="relative bg-slate-900 p-4 rounded-full border border-blue-500/30">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        {/* Minimal verification text */}
        <h1 className="text-xl md:text-2xl font-bold text-white mb-8 tracking-tight font-sans">
          Verify to get full access
        </h1>

        {/* Verify Button or Loader */}
        <button
          onClick={handleVerify}
          disabled={status !== 'idle'}
          className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 ${
            status === 'idle'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] cursor-pointer'
              : status === 'verifying'
              ? 'bg-slate-800 text-slate-400 border border-slate-700 cursor-not-allowed'
              : 'bg-green-600 text-white cursor-not-allowed'
          }`}
        >
          {status === 'idle' && (
            <>
              <Lock className="w-4 h-4" />
              <span>Verify</span>
            </>
          )}

          {status === 'verifying' && (
            <>
              <div className="w-4 h-4 border-2 border-slate-500 border-t-slate-200 rounded-full animate-spin"></div>
              <span>Verifying...</span>
            </>
          )}

          {status === 'verified' && (
            <>
              <svg className="w-5 h-5 text-white animate-in zoom-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Verified</span>
            </>
          )}
        </button>

        {/* Small security assurance footer */}
        <span className="text-[10px] text-slate-500 mt-8 tracking-wider uppercase font-medium">
          Secure Access Verification
        </span>
      </div>
    </div>
  )
}

export default App
