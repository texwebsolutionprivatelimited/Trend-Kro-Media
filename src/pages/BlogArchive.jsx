import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogsData } from '../data/blogsData';

export default function BlogArchive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically compute list of unique categories
  const categories = useMemo(() => {
    const list = new Set(blogsData.map(b => b.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter blogs based on category & search query
  const filteredBlogs = useMemo(() => {
    return blogsData.filter(blog => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="relative min-h-screen bg-brand-bg pt-32 pb-24 overflow-hidden">
      {/* Background glow spots */}
      <div className="glow-spot w-[500px] h-[500px] bg-brand-pink/10 top-[10%] left-[-100px]"></div>
      <div className="glow-spot w-[600px] h-[600px] bg-brand-purple/10 bottom-[20%] right-[-200px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-pink/10 border border-brand-pink/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Trend Kro Insights</span>
          </div>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white tracking-tight mb-4">
            Explore Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-slate-400 font-sans text-base leading-relaxed">
            Read our latest deep-dives on web development trends, paid advertising tactics, SEO strategies, and organic brand scaling guides.
          </p>
        </div>

        {/* Controls: Search and Categories */}
        <div className="glass-card rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Search box */}
          <div className="relative w-full md:max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or keyword..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 font-sans focus:outline-none focus:border-brand-pink"
            />
            <Search className="w-5 h-5 text-brand-pink absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Categories list */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-sans font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-accent to-brand-pink text-white shadow-md shadow-brand-accent/10'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <article
                key={idx}
                className="glass-card rounded-3xl overflow-hidden flex flex-col hover:border-brand-pink/30 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-300 group"
              >
                <Link to={`/blogs/${blog.slug}`} className="block h-48 overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md text-brand-pink border border-brand-pink/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </Link>
                <div className="p-4 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex gap-4 items-center text-slate-400 font-sans text-xs mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-pink" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-brand-pink" />
                        By Admin
                      </span>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-brand-pink transition-colors">
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-slate-400 font-sans text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="flex items-center gap-2 text-brand-pink font-sans font-bold text-sm hover:text-brand-accent transition-colors self-start"
                  >
                    Read Full Post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-card rounded-3xl max-w-xl mx-auto">
            <h3 className="font-montserrat font-black text-xl text-white mb-2">No Articles Found</h3>
            <p className="text-slate-400 font-sans text-sm">
              We couldn't find any articles matching your search query. Try clearing filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
