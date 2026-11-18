'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SITE, SERVICES } from '@/lib/siteData'

const topLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-black text-lg tracking-wide">
            RMG <span className="text-[#F4E7C9]">CONSTRUCTION</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Home
          </Link>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 10 6"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="navbar-glass rounded-xl border border-white/10 overflow-hidden py-2">
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-2.5 text-xs font-bold text-[#F4E7C9] uppercase tracking-widest hover:bg-white/5 transition-colors"
                  >
                    All Services →
                  </Link>
                  <div className="border-t border-white/5 mt-1 mb-1" />
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={SITE.phoneLink} className="text-sm font-semibold text-[#F4E7C9] hover:text-[#F4E7C9] transition-colors">
            {SITE.phone}
          </a>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-black font-bold text-sm px-5 py-2.5 rounded transition-colors">
            FREE QUOTE
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden navbar-glass mt-2 px-6 py-4 flex flex-col gap-1">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-[#F4E7C9] font-medium transition-colors py-2">
            Home
          </Link>

          {/* Mobile Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-gray-300 hover:text-[#F4E7C9] font-medium transition-colors py-2"
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 10 6"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-white/10 ml-1">
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F4E7C9] text-sm font-semibold py-1.5 hover:underline"
                >
                  All Services
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-400 hover:text-white text-sm py-1.5 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-[#F4E7C9] font-medium transition-colors py-2">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-[#F4E7C9] font-medium transition-colors py-2">
            Contact
          </Link>

          <div className="flex flex-col gap-2 pt-3 border-t border-white/10 mt-1">
            <a href={SITE.phoneLink} className="text-[#F4E7C9] font-bold">{SITE.phone}</a>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-white text-black font-bold px-4 py-2 rounded text-center">
              FREE QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
