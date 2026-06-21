import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ChevronLeft, Share2, MessageCircle } from 'lucide-react';
import { blogsData } from '../data/blogsData';

const TwitterIcon = () => (
  <svg className="w-4 h-4 text-[#1da1f2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 text-[#0a66c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find corresponding blog
  const blog = useMemo(() => {
    return blogsData.find(b => b.slug === slug);
  }, [slug]);

  // Navigate back if blog not found
  useEffect(() => {
    if (!blog) {
      navigate('/blogs');
    }
  }, [blog, navigate]);

  // Extract headings for Table of Contents
  const headings = useMemo(() => {
    if (!blog || !blog.content) return [];
    
    // We can parse h2 tags out of the content html string
    const headingList = [];
    const div = document.createElement('div');
    div.innerHTML = blog.content;
    const h2s = div.querySelectorAll('h2');
    
    h2s.forEach((h2, idx) => {
      // Ensure the heading has an ID so we can jump to it
      const text = h2.textContent || h2.innerText;
      let id = h2.id;
      if (!id) {
        id = `heading-${idx}`;
      }
      headingList.push({ id, text });
    });
    
    return headingList;
  }, [blog]);

  if (!blog) return null;

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(blog.title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offsetting scroll for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg pt-32 pb-24 overflow-hidden">
      {/* Background glow spots */}
      <div className="glow-spot w-[600px] h-[600px] bg-brand-purple/5 top-[10%] left-[-200px]"></div>
      <div className="glow-spot w-[600px] h-[600px] bg-brand-pink/5 bottom-[10%] right-[-200px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Back Link */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-pink transition-colors font-sans text-sm font-semibold mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        {/* Hero Area */}
        <div className="max-w-4xl mb-12">
          <span className="bg-brand-pink/15 text-brand-pink border border-brand-pink/20 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-6">
            {blog.category}
          </span>
          <h1 className="font-montserrat font-black text-3xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-6 items-center text-slate-400 font-sans text-sm border-b border-white/5 pb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-pink" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-pink" />
              By {blog.author.split('@')[0]}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-pink" />
              10 Min Read
            </span>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Featured Image */}
            <div className="w-full h-48 sm:h-72 md:h-96 lg:h-[450px] rounded-3xl overflow-hidden border border-white/5 mb-10 shadow-2xl">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <article 
              className="blog-rich-content text-slate-300 font-sans"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Author Block */}
            <div className="glass-card rounded-3xl p-4 sm:p-8 mt-16 flex flex-col sm:flex-row gap-6 items-center border border-white/5">
              <div className="w-20 h-20 rounded-full bg-brand-pink/25 border-2 border-brand-pink/50 flex items-center justify-center font-montserrat font-extrabold text-2xl text-brand-pink flex-shrink-0">
                A
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-montserrat font-bold text-white text-lg mb-1">Trend Kro Media Team</h4>
                <p className="text-slate-400 font-sans text-sm leading-relaxed mb-3">
                  We are a premium team of content researchers, scriptwriters, and video editors engineering organic digital presence for high-ticket founders.
                </p>
                <div className="flex gap-4 justify-center sm:justify-start">
                  <a href="#" className="text-slate-500 hover:text-brand-pink transition-colors text-xs font-bold uppercase tracking-wider">Follow Agency</a>
                </div>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/5">
                <h3 className="font-montserrat font-bold text-white text-base tracking-wide uppercase border-b border-white/5 pb-4 mb-4">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-3 font-sans text-sm">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className="text-left text-slate-400 hover:text-brand-pink hover:translate-x-1 transition-all duration-200"
                    >
                      {heading.text}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Share Widget */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 text-center lg:text-left">
              <h3 className="font-montserrat font-bold text-white text-base tracking-wide uppercase border-b border-white/5 pb-4 mb-6">
                Share this post
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-3 justify-center lg:justify-start">
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-brand-pink transition-all font-sans text-sm"
                >
                  <TwitterIcon />
                  <span className="hidden lg:inline">Share on Twitter</span>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-brand-pink transition-all font-sans text-sm"
                >
                  <LinkedinIcon />
                  <span className="hidden lg:inline">Share on LinkedIn</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-brand-pink transition-all font-sans text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25d366]" />
                  <span className="hidden lg:inline">Send via WhatsApp</span>
                </a>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-brand-pink transition-all font-sans text-sm w-full"
                >
                  <Share2 className="w-4 h-4 text-brand-pink" />
                  <span className="hidden lg:inline">{copied ? 'Copied Link!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
