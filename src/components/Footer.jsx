import React from 'react';
import { Link } from 'react-router-dom';
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

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#0b0d16] border-t border-white/5 py-16 relative overflow-hidden">
      {/* Background glow spot */}
      <div className="glow-spot w-[400px] h-[400px] bg-brand-purple/10 bottom-[-200px] left-[10%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Block */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoImg} alt="Trend Kro Media Logo" className="w-12 h-12 object-cover object-left rounded-2xl border border-white/10 shadow-lg shadow-brand-accent/5" />
            <span className="font-montserrat font-black text-2xl tracking-wider text-white">
              TREND KRO <span className="text-gradient">MEDIA</span>
            </span>
          </div>
          <p className="text-slate-400 font-sans text-base max-w-sm mb-8 leading-relaxed font-poppins">
            Scale your business with high-performance digital marketing, custom website development, paid advertising campaigns, and premium brand styling design.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/trendkaromedia?igsh=MW83YzFpYWhrcWhoZA%3D%3D" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink text-white transition-colors duration-200">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary text-white transition-colors duration-200">
              <LinkedinIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 text-white transition-colors duration-200">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h3 className="font-montserrat font-bold text-white text-base tracking-wide uppercase mb-6">Company</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#services" onClick={() => handleNavClick('services')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#stats" onClick={() => handleNavClick('stats')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Stats
              </a>
            </li>
            <li>
              <a href="#results" onClick={() => handleNavClick('results')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#packages" onClick={() => handleNavClick('packages')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Packages
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-montserrat font-bold text-white text-base tracking-wide uppercase mb-6">Resources</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/blogs" className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Blog
              </Link>
            </li>
            <li>
              <a href="#faq" onClick={() => handleNavClick('faq')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleNavClick('contact')} className="text-slate-400 hover:text-brand-accent transition-colors font-sans text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10">
        <p className="text-slate-500 font-sans text-sm mb-4 md:mb-0">
          &copy; {currentYear} Trend Kro Media. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-slate-400 font-sans text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-slate-400 font-sans text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
