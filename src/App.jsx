import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col z-10">
          
          {/* Navigation Bar */}
          <nav className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <span className="text-2xl font-semibold text-gray-900 tracking-tight">
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="absolute top-20 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 z-50 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium text-lg py-2 border-b border-gray-50 last:border-0"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </nav>

          {/* Main Hero Content */}
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center -mt-36 flex flex-col items-center max-w-4xl">
              <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                DISCORD
              </span>
              
              <h1 className="flex flex-col items-center">
                <span className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                  Canada.
                </span>
                <span 
                  className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter -mt-2 md:-mt-3 lg:-mt-4"
                  style={{ color: '#202A36' }}
                >
                  Meeting.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-800 mt-6 mb-8 max-w-2xl font-medium flex items-center justify-center gap-2 flex-wrap">
                <span>Now accessible from</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-600 text-white font-bold shadow-md border border-white/20">
                  <span>CANADA</span>
                  <img 
                    src="https://flagcdn.com/w40/ca.png" 
                    alt="Canada Flag" 
                    className="w-6 h-4 object-cover rounded-sm border border-white/20"
                  />
                </span>
              </p>

              <div className="flex items-center gap-4">
                <a 
                  href="https://guyprior.com/iv4s6uai?key=eb87731ce0c5ba0385ec684ed5c000c0"
                  className="no-underline"
                >
                  <button className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold text-sm transition-all duration-300 shadow-md shadow-amber-500/20 hover:scale-105">
                    Free
                  </button>
                </a>
                <a 
                  href="https://guyprior.com/iv4s6uai?key=eb87731ce0c5ba0385ec684ed5c000c0"
                  className="no-underline"
                >
                  <button 
                    className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 border border-amber-500 hover:scale-105 shadow-lg flex items-center gap-2"
                    style={{ backgroundColor: '#202A36' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a2229';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(245, 158, 11, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#202A36';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span>Premium</span>
                    <div className="relative w-5 h-5 flex items-center justify-center bg-white rounded-full border border-red-500">
                      <span className="text-[6px] font-bold text-black scale-90">ADS</span>
                      <div className="absolute inset-0 border-t-2 border-red-500 rotate-45 top-1/2 -translate-y-1/2"></div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default App
