import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, target) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + target);
      } else {
        const id = target.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <footer className="bg-[#0b0d16] border-t border-white/5 pt-8 sm:pt-12 pb-4 sm:pb-6 relative overflow-hidden">
      {/* Background glow spot */}
      <div className="glow-spot w-[400px] h-[400px] bg-brand-purple/10 bottom-[-200px] left-[10%]"></div>

      {/* Main grid: brand + nav columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand Block — spans 2 cols on md+ */}
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <img src={logoImg} alt="Trend Kro Media Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-cover object-left rounded-2xl border border-white/10 shadow-lg shadow-brand-accent/5" />
            <span className="font-montserrat font-black text-lg sm:text-2xl tracking-wider text-white leading-tight">
              TREND KRO <span className="text-gradient">MEDIA</span>
            </span>
          </div>
          <p className="text-slate-400 font-sans text-sm sm:text-base max-w-sm mb-6 sm:mb-8 leading-relaxed">
            Scale your business with high-performance digital marketing, custom website development, paid advertising campaigns, and premium brand styling design.
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a href="https://www.instagram.com/trendkaromedia?igsh=MW83YzFpYWhrcWhoZA%3D%3D" target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink text-white transition-colors duration-200">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary text-white transition-colors duration-200">
              <LinkedinIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 text-white transition-colors duration-200">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h3 className="font-montserrat font-bold text-white text-sm sm:text-base tracking-wide uppercase mb-4 sm:mb-6">Company</h3>
          <ul className="flex flex-col gap-3 sm:gap-4">
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#results" onClick={(e) => handleNavClick(e, '#results')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#stats" onClick={(e) => handleNavClick(e, '#stats')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Stats
              </a>
            </li>
          </ul>
        </div>

        {/* Resources links */}
        <div>
          <h3 className="font-montserrat font-bold text-white text-sm sm:text-base tracking-wide uppercase mb-4 sm:mb-6">Resources</h3>
          <ul className="flex flex-col gap-3 sm:gap-4">
            <li>
              <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Packages
              </a>
            </li>
            <li>
              <Link to="/blogs" className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Blog
              </Link>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — copyright + credit + legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-white/5 mt-6 sm:mt-10 pt-4 sm:pt-6 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0 relative z-10 text-center md:text-left">
        <p className="text-slate-500 font-sans text-xs sm:text-sm">
          &copy; {currentYear} Trend Kro Media. All rights reserved.
        </p>

        <div className="flex items-center gap-1.5 text-slate-500 font-sans text-xs sm:text-sm">
          <span>Made with</span>
          <span className="inline-block text-red-500 animate-pulse font-bold text-sm sm:text-base">❤️</span>
          <span>by</span>
          <a
            href="https://internshipcatalyst.in"
            target="_blank"
            rel="noreferrer"
            className="text-brand-pink hover:text-brand-accent transition-colors font-bold ml-0.5"
          >
            Internship Catalyst
          </a>
        </div>

        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="text-slate-500 hover:text-slate-400 font-sans text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-slate-400 font-sans text-xs transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Giant brand stamp at the absolute bottom */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/5 text-center relative z-10 select-none overflow-hidden">
        <h2 className="font-montserrat font-black text-[1.3rem] xs:text-2xl sm:text-5xl md:text-7xl lg:text-[5.5rem] tracking-[0.12em] sm:tracking-[0.2em] lg:tracking-[0.25em] uppercase leading-none pb-1 sm:pb-2 select-none cursor-default brand-signature-stamp whitespace-nowrap">
          TREND KRO MEDIA
        </h2>
      </div>
    </footer>
  );
}
