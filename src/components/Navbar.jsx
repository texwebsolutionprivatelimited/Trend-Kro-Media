import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', target: '#home' },
    { label: 'Stats', target: '#stats' },
    { label: 'Case Studies', target: '#results' },
    { label: 'Services', target: '#services' },
    { label: 'Portfolio', target: '#portfolio' },
    { label: 'Packages', target: '#packages' },
    { label: 'FAQ', target: '#faq' },
    { label: 'About Us', target: '#team' },
    { label: 'Blog', target: '/blogs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    setIsMobileOpen(false);
    
    // If it's a hash anchor and we are on home
    if (target.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + target);
      } else {
        const id = target.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark/95 border-b border-brand-accent/20 shadow-2xl py-3' : 'bg-transparent border-b border-white/5 py-4'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center w-full">
        {/* Left: Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <img src={logoImg} alt="Trend Kro Media Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-cover object-left rounded-xl border border-white/10 shadow-md group-hover:scale-105 transition-transform" />
          <span className="font-montserrat font-black text-sm sm:text-lg tracking-wider text-white">
            TREND KRO <span className="text-gradient">MEDIA</span>
          </span>
        </Link>

        {/* Center: Desktop Menu Links */}
        <ul className="hidden lg:flex items-center gap-6 mx-auto">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              {link.target.startsWith('/') ? (
                <Link
                  to={link.target}
                  className={`font-sans font-medium text-sm tracking-wide transition-colors duration-200 flex items-center gap-1.5 hover:text-brand-accent ${
                    location.pathname === link.target ? 'text-brand-accent font-semibold' : 'text-white/85'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="bg-brand-green text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full animate-pulse shadow-md">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  href={link.target}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="font-sans font-medium text-sm tracking-wide text-white/85 hover:text-brand-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Get Started Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-brand-accent to-brand-pink hover:from-brand-accent/90 hover:to-brand-pink/90 text-white font-sans font-bold text-sm rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-brand-accent/20"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white/90 hover:text-brand-accent transition-colors p-1"
          aria-label="Toggle mobile menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-brand-bg/98 backdrop-blur-xl border-t border-brand-accent/20 transition-transform duration-350 ease-out overflow-y-auto px-6 py-8 flex flex-col justify-between ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <li key={idx} className="border-b border-white/5 pb-4">
              {link.target.startsWith('/') ? (
                <Link
                  to={link.target}
                  onClick={() => setIsMobileOpen(false)}
                  className={`font-sans font-semibold text-lg flex items-center justify-between hover:text-brand-accent ${
                    location.pathname === link.target ? 'text-brand-accent' : 'text-white'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="bg-brand-green text-white text-xs font-bold uppercase px-2.5 py-0.5 rounded-full shadow-md">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  href={link.target}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="font-sans font-semibold text-lg text-white hover:text-brand-accent block w-full"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="pb-8">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-brand-accent to-brand-pink text-white font-sans font-bold rounded-xl shadow-lg"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
