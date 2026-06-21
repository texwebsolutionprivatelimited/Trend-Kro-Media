import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Check, Play, User, Users, Star, Award, ChevronDown, Sparkles, MessageCircle, Send, CheckCircle2, Target, Code, Palette, Film, Share2, Globe, Megaphone, PenTool, Clapperboard, Pencil, ExternalLink, Mail } from 'lucide-react';
import heroImg from '../assets/hero_marketing_growth.webp';
import heroImg2 from '../assets/hero_smm_branding.webp';
import heroImg3 from '../assets/hero_web_dev.webp';
import heroImg4 from '../assets/hero_ads_scaling.webp';
import portfolioWeb from '../assets/portfolio_web_dev.webp';
import portfolioWeb2 from '../assets/portfolio_web_dev_2.webp';
import portfolioSocial from '../assets/portfolio_social_media.webp';
import portfolioSocial2 from '../assets/portfolio_social_media_2.webp';
import portfolioAds from '../assets/portfolio_paid_ads.webp';
import portfolioAds2 from '../assets/portfolio_paid_ads_2.webp';
import portfolioVideo from '../assets/portfolio_video_editing.webp';
import portfolioVideo2 from '../assets/portfolio_video_editing_2.webp';
import teamAarohi from '../assets/team_aarohi.webp';
import teamKabir from '../assets/team_kabir.webp';

// Hero Images Array
const heroImages = [heroImg, heroImg2, heroImg3, heroImg4];

// FAQs Array
const faqs = [
  {
    question: "What services does Trend Kro Media provide?",
    answer: "We are a full-service marketing and brand agency. We specialize in Social Media Management, Meta Ads (Facebook & Instagram), Google Ads, Custom Website Development, Branding & Identity Design, Video Editing (Reels/Shorts), and Graphic Design."
  },
  {
    question: "How long does it take to see results from paid advertising campaigns?",
    answer: "Meta Ads and Google Ads campaigns are typically launched within 7-10 days after setup and creative development. Initial optimization and audience learning phases take about 2-3 weeks, after which you will see qualified conversion leads start scaling."
  },
  {
    question: "Do you build custom websites from scratch?",
    answer: "Yes. Our engineering team develops fully custom, highly responsive websites and single page applications using modern stacks like React.js and Tailwind CSS, fully optimized for search engines (SEO) and lightning-fast speeds."
  },
  {
    question: "How does social media management work?",
    answer: "We handle your channels end-to-end: content calendars, research, copy scripting, video editing, post graphic design, community management, and active publishing schedules, taking the operational burden completely off your shoulders."
  },
  {
    question: "Can we mix and match services into custom packages?",
    answer: "Absolutely! We offer flexible modular agreements. If your business needs a tailored mix (for example: Meta Ads combined with Website Development), our strategists will construct a custom execution plan that fits your exact budget goals."
  }
];

// Packages Array
const packages = [
  {
    name: "Branding & SMM",
    tagline: "Ideal for establishing a strong organic social media presence.",
    price: "₹35,000",
    period: "month",
    features: [
      "Complete Social Media Management",
      "Branding & Logo Identity Design",
      "15 Custom Graphic Designs & Post Creatives",
      "8 Short-Form Videos / Reels Creation",
      "Copywriting & Content Strategy",
      "Monthly Analytics & Audits",
      "Dedicated Account Executive"
    ],
    popular: false,
    gradient: "from-brand-primary to-blue-500"
  },
  {
    name: "Performance Ads",
    tagline: "Focused strictly on paid acquisition, leads, and sales growth.",
    price: "₹65,000",
    period: "month",
    features: [
      "Meta Ads Management (FB & Instagram)",
      "Google Search & Display Ads",
      "Ad Creative Strategy & Copywriting",
      "Custom Landing Page Design (Opt-in)",
      "Pixel/Tag Manager Setup & Tracking",
      "A/B Testing & Audience Research",
      "Weekly Leads & Conversion Reports"
    ],
    popular: true,
    gradient: "from-brand-accent to-brand-pink"
  },
  {
    name: "Omnipresent Growth",
    tagline: "Full-scale custom marketing and development engine.",
    price: "₹1,20,000",
    period: "month",
    features: [
      "Full SMM (Instagram, YouTube, LinkedIn)",
      "Advanced Video Editing (20 Reels/Shorts)",
      "High-Performance Custom Web Development",
      "Integrated SEO Strategy",
      "Meta Ads & Google Ads Management",
      "Premium Ad Creative Assets",
      "Bi-weekly Strategy Review Syncs",
      "Dedicated Team (Designer, Developer, Editor)"
    ],
    popular: false,
    gradient: "from-brand-purple to-pink-500"
  }
];

// Success Results Array
const caseStudies = [
  {
    client: "Abhyudaya Advisory",
    handle: "Paid Advertising",
    metric: "3.8x Return on Ad Spend",
    duration: "90 Days",
    quote: "Trend Kro Media completely transformed our customer acquisition. Their Meta and Google Ads strategy slashed our lead costs and delivered ready-to-buy clients.",
    image: portfolioAds
  },
  {
    client: "Mehak Cosmetics",
    handle: "Web Development",
    metric: "450% Sales Scaling",
    duration: "6 Months",
    quote: "They built our e-commerce website on React and launched a custom ad campaign. Our online orders scaled instantly, handling massive traffic seamlessly.",
    image: portfolioWeb
  },
  {
    client: "Siddhant Wellness",
    handle: "Branding & SMM",
    metric: "5M+ Monthly Organic Reach",
    duration: "9 Months",
    quote: "Their social media team and graphic designers established a premium brand identity for our healthcare clinic. We now receive regular automated inquiries.",
    image: portfolioSocial
  },
  {
    client: "Zenith Production",
    handle: "Video Production",
    metric: "10M+ Video Views",
    duration: "3 Months",
    quote: "Their retention-focused video editing changed our social presence. Our short-form Reels began hitting the explore page regularly, generating viral growth.",
    image: portfolioVideo
  }
];

// Portfolio Items Array
const portfolioItems = [
  {
    title: "Vesper SaaS Dashboard",
    category: "Web Development",
    desc: "A lightning-fast React dashboard with real-time tracking, custom animations, and glassmorphic UI.",
    image: portfolioWeb,
    tags: ["React.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Aurora Organic Campaign",
    category: "Branding & SMM",
    desc: "A complete visual identity overhaul resulting in a 40% organic follower boost in 60 days.",
    image: portfolioSocial,
    tags: ["Branding", "Social Strategy", "Graphic Design"]
  },
  {
    title: "Abhyudaya Advisory Ads",
    category: "Paid Advertising",
    desc: "High-conversion Facebook and Google Ad funnels that scaled lead volume by 3.8x with low CPL.",
    image: portfolioAds,
    tags: ["Meta Ads", "Google Ads", "Conversion Funnel"]
  },
  {
    title: "Zenith Cinematic Reels",
    category: "Video Production",
    desc: "Short-form video assets featuring fast-paced editing and retention hooks that hit over 1M+ views.",
    image: portfolioVideo,
    tags: ["Premiere Pro", "Motion Graphics", "Reels"]
  },
  {
    title: "Apex E-Commerce App",
    category: "Web Development",
    desc: "A custom React Native e-commerce marketplace featuring high-performance checkout and search filters.",
    image: portfolioWeb2,
    tags: ["React Native", "TailwindCSS", "Stripe API"]
  },
  {
    title: "Pulse Fitness SMM",
    category: "Branding & SMM",
    desc: "A premium corporate visual identity package and organic content calendar designed for a wellness brand.",
    image: portfolioSocial2,
    tags: ["Brand Identity", "SMM Calendar", "Vector Design"]
  },
  {
    title: "Summit Conversions Campaign",
    category: "Paid Advertising",
    desc: "A full Google Search and Display ads funnel optimized for high-ticket customer acquisition.",
    image: portfolioAds2,
    tags: ["Google Search", "Display Network", "Conversion Tracking"]
  },
  {
    title: "Cinematic Studio Color Grade",
    category: "Video Production",
    desc: "Cinematic reel editing with custom color grading profiles, audio dynamics, and retention transitions.",
    image: portfolioVideo2,
    tags: ["DaVinci Resolve", "Color Grading", "Cinematic Cut"]
  }
];

// Counter Component (Scroll triggers up/down count)
function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value) || 0;
      const duration = 1500; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = progress * (2 - progress); // outQuad
        const currentCount = start + easeProgress * (end - start);
        
        if (value.includes('.')) {
          setCount(currentCount.toFixed(1));
        } else {
          setCount(Math.floor(currentCount));
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    } else {
      setCount(0); // Reset count when scrolled away
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// FAQ Item Component
function FaqItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border-b border-white/5 pb-4 mb-4">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left py-3 text-white font-montserrat font-bold text-lg hover:text-brand-accent transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-pink transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 font-sans text-base leading-normal pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', instagram: '', niche: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg pt-20">
      {/* Grid background */}
      <div className="bg-grid-glow"></div>

      {/* Glow Spots */}
      <div className="glow-spot w-[600px] h-[600px] bg-brand-accent/20 top-[-100px] left-[-200px] animate-glow-pulse-1"></div>
      <div className="glow-spot w-[600px] h-[600px] bg-brand-purple/20 top-[400px] right-[-200px] animate-glow-pulse-2"></div>
      
      {/* 1. HERO SECTION */}
      <span id="home"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-8 lg:pt-3 lg:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-3 mx-auto lg:mx-0"
          >
            <Sparkles className="w-4 h-4 text-brand-pink animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Premium Done-For-You Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-montserrat font-black text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.1] mb-6"
          >
            Scale Your Business With Modern <br />
            <span className="text-gradient">Digital Marketing</span> Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-400 font-sans text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-normal"
          >
            We drive growth through custom website development, targeted paid ad campaigns (Meta & Google), social media management, premium video editing, and complete brand identity design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mb-0 lg:mb-6"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-brand-accent to-brand-pink text-white font-sans font-bold text-sm sm:text-base rounded-xl transition-all hover:scale-105 shadow-xl shadow-brand-accent/25"
            >
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#results"
              className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/5 border border-white/10 text-white font-sans font-bold text-sm sm:text-base rounded-xl hover:bg-white/10 transition-all"
            >
              Explore Success Case Studies
            </a>
          </motion.div>
        </div>

        {/* Right Column - Image Illustration */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg lg:max-w-none group"
          >
            {/* Soft background glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-accent/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Image Wrapper */}
            <div className="relative glass-card rounded-3xl p-3 border border-white/10 shadow-2xl overflow-hidden hover:border-brand-pink/30 transition-colors duration-300 aspect-square flex items-center justify-center bg-slate-950/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeHeroIdx}
                  src={heroImages[activeHeroIdx]} 
                  alt="Digital Marketing and Growth illustration" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover rounded-2xl shadow-inner" 
                />
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                {heroImages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveHeroIdx(dotIdx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeHeroIdx === dotIdx ? 'bg-brand-pink w-6' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <span id="stats"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-b border-white/5">
        <div className="text-center mb-12 sm:mb-16">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Real-Time Performance Metrics</span>
          </div>

          <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4">
            We Build Campaigns That <span className="text-gradient">Drive Real Growth</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Our data speaks for itself. We scale brands from initial launch to market leadership.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "100", suffix: "M+", label: "Organic Views", desc: "SMM & Branding" },
            { value: "4.2", suffix: "x", label: "Average ROAS", desc: "Performance Ads" },
            { value: "50", suffix: "+", label: "Custom Apps Built", desc: "Web Development" },
            { value: "1000", suffix: "+", label: "Videos Produced", desc: "Video Editing" },
          ].map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 text-center relative overflow-hidden group hover:border-brand-pink/30 transition-all duration-300">
              <div className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-5xl text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                <span className="text-gradient">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-slate-200 font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase mb-1">{stat.label}</div>
              <div className="text-slate-500 font-sans text-[10px] sm:text-xs font-medium uppercase tracking-wider">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RESULTS SECTION */}
      <span id="results"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-pink/10 border border-brand-pink/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Verified Success Stories</span>
          </div>

          <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-5xl text-white tracking-tight mb-4">
            Real Brands. <span className="text-gradient">Real Explosive Growth.</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-lg max-w-xl mx-auto">
            We don't chase vanity metrics. We focus on conversion, branding, and high-performance engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-4 sm:p-6 flex flex-col justify-between hover:border-brand-pink/20 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-300 group">
              <div>
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={study.image} alt={study.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-montserrat font-extrabold text-xl text-white">{study.client}</h3>
                  <span className="text-xs font-bold text-brand-pink font-sans bg-brand-pink/10 px-2.5 py-1 rounded-full">{study.handle}</span>
                </div>
                <p className="text-slate-300 font-sans text-base italic leading-normal mb-6">
                  "{study.quote}"
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 flex justify-between items-center text-sm font-bold font-sans">
                <span className="text-slate-400">Result: <span className="text-white">{study.metric}</span></span>
                <span className="text-brand-pink">{study.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <span id="services"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-b border-white/5">
        <div className="text-center mb-12 sm:mb-20">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-purple"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Our Offerings</span>
          </div>

          <h2 className="font-montserrat font-black text-2xl sm:text-3.5xl md:text-5xl text-white tracking-tight mb-4">
            Custom Marketing <span className="text-gradient">& Growth Services</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-lg max-w-xl mx-auto">
            We provide a complete suite of digital services designed to scale your brand authority, capture leads, and grow revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Social Media Management",
              desc: "Organic social page handling: content calendars, copywriting, audience engagement, and performance auditing for complete channel growth.",
              icon: <Megaphone className="w-6 h-6 text-white" />,
              gradient: "from-blue-600 to-brand-primary"
            },
            {
              title: "Meta Ads (Facebook & Instagram)",
              desc: "Paid client acquisition. High-ROI ad setup, target pixel optimization, lookalike scaling, and conversion-funnel optimization.",
              icon: <Target className="w-6 h-6 text-white" />,
              gradient: "from-brand-accent to-brand-pink"
            },
            {
              title: "Google Ads",
              desc: "Capture search intent at its highest. Google Search campaigns, Display networks, and YouTube ad placement configured to max ROAS.",
              icon: <Globe className="w-6 h-6 text-white" />,
              gradient: "from-purple-600 to-indigo-500"
            },
            {
              title: "Website Development",
              desc: "Fully customized, responsive, and secure websites built using modern React + Tailwind CSS frameworks. Highly optimized for speed and SEO structure.",
              icon: <Code className="w-6 h-6 text-white" />,
              gradient: "from-brand-purple to-pink-500"
            },
            {
              title: "Branding & Identity Design",
              desc: "Cohesive vector layout kits, brand style guides, logo configurations, modern typography hierarchies, and premium styling identity.",
              icon: <PenTool className="w-6 h-6 text-white" />,
              gradient: "from-brand-green to-emerald-500"
            },
            {
              title: "Video Editing & Reels Creation",
              desc: "Fast audio pacing, engaging subtitle animations, transitions, and jump cuts designed to maximize retention scores on Reels, Shorts, and TikToks.",
              icon: <Clapperboard className="w-6 h-6 text-white" />,
              gradient: "from-red-500 to-orange-500"
            },
            {
              title: "Graphic Design & Creative Content",
              desc: "Premium social graphics, ad creative mockups, informational carousels, banner placements, and highly polished corporate marketing visual assets.",
              icon: <Pencil className="w-6 h-6 text-white" />,
              gradient: "from-cyan-500 to-teal-500"
            }
          ].map((item, idx) => {
            // Row 1 (first 4 items): lg:col-span-3 (4 items * 3 cols = 12)
            // Row 2 (last 3 items): lg:col-span-4 (3 items * 4 cols = 12)
            const lgSpan = idx < 4 ? "lg:col-span-3" : "lg:col-span-4";
            // On medium screens: first 6 items take md:col-span-6, 7th item takes md:col-span-12
            const mdSpan = idx === 6 ? "md:col-span-12" : "md:col-span-6";
            
            return (
              <div 
                key={idx} 
                className={`${mdSpan} ${lgSpan} glass-card rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden group hover:border-brand-pink/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg shadow-white/5`}>
                    {item.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white mb-4 group-hover:text-brand-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-sans text-sm leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <span id="portfolio"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pb-24 border-b border-white/5">
        <div className="text-center mb-12 sm:mb-20">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-pink/10 border border-brand-pink/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Our Work</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl sm:text-3.5xl md:text-5xl text-white tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-lg max-w-xl mx-auto">
            Explore a showcase of our high-performance solutions engineered for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {(showAllPortfolio ? portfolioItems : portfolioItems.slice(0, 4)).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-pink/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-5px_rgba(255,134,199,0.25)] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/85 via-transparent to-transparent opacity-65"></div>
                
                {/* Floating View Icon Overlay */}
                <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-accent to-brand-pink flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <span className="absolute top-3.5 left-3.5 bg-brand-bg/90 backdrop-blur-md text-brand-pink text-xs font-bold font-sans px-3.5 py-1.5 rounded-full border border-brand-pink/20 z-10">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-montserrat font-extrabold text-xl text-white mb-2.5 group-hover:text-brand-pink transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-sans text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-sans font-medium text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-brand-pink/20 hover:bg-brand-pink/10 hover:text-brand-pink transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Toggle Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAllPortfolio(!showAllPortfolio)}
            className="flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 hover:border-brand-pink/40 hover:bg-white/10 text-white font-sans font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/10 cursor-pointer"
          >
            {showAllPortfolio ? 'Show Less' : 'See More Projects'}
            <ChevronDown className={`w-4 h-4 text-brand-pink transition-transform duration-300 ${showAllPortfolio ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* 5. PACKAGES SECTION */}
      <span id="packages"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-20">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Transparent Plans</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl sm:text-3.5xl md:text-5xl text-white tracking-tight mb-4">
            Select Your <span className="text-gradient">Authority Package</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-lg max-w-xl mx-auto">
            Choose the pace you want to scale at. We manage everything end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular ? 'border-brand-pink/50 shadow-xl shadow-brand-pink/5 scale-[1.03] lg:scale-[1.05] z-20' : 'z-10 hover:border-white/20'
              } ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {pkg.popular && (
                <span className="absolute -top-1 right-6 bg-gradient-to-r from-brand-accent to-brand-pink text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-montserrat font-black text-2xl text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-400 font-sans text-sm mb-6">{pkg.tagline}</p>
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">{pkg.price}</span>
                  <span className="text-slate-400 text-sm font-sans">/ {pkg.period}</span>
                </div>
                <div className="border-t border-white/5 pt-8 mb-8">
                  <ul className="flex flex-col gap-4">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 font-sans text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href="#contact"
                className={`w-full py-4 text-center font-sans font-bold text-sm rounded-xl transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-brand-accent to-brand-pink text-white hover:scale-[1.02] shadow-lg shadow-brand-accent/20'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <span id="faq"></span>
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-white/5">
        <div className="text-center mb-12 sm:mb-16">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-pink/10 border border-brand-pink/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Any Questions?</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl sm:text-3.5xl md:text-4xl text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-4 sm:p-8 md:p-12">
          {faqs.map((faq, idx) => (
            <FaqItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIdx === idx}
              toggle={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* 7. TEAM SECTION */}
      <span id="team"></span>
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-white/5">
        <div className="text-center mb-12 sm:mb-16">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">About Us</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl sm:text-3.5xl md:text-5xl text-white tracking-tight mb-4">
            The Authority <span className="text-gradient">Architects</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm text-base max-w-md mx-auto">
            Meet the driving strategists engineering presence for the top 1% business founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Aarohi Sen */}
          <div className="glass-card rounded-3xl p-4 sm:p-8 text-center border border-white/5 hover:border-brand-pink/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-10px_rgba(255,134,199,0.2)] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                {/* Rotating Dashed Border */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-pink/30 group-hover:border-brand-pink/80 animate-[spin_20s_linear_infinite] transition-colors duration-500"></div>
                {/* Static Avatar Container */}
                <div className="w-[128px] h-[128px] rounded-full overflow-hidden bg-slate-950/20 p-1 z-10">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={teamAarohi} 
                      alt="Aarohi Sen" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-white mb-1 group-hover:text-brand-pink transition-colors">Aarohi Sen</h3>
              <span className="text-brand-pink font-sans text-xs font-black uppercase tracking-widest block mb-4">Founder & Lead Brand Strategist</span>
              
              {/* Expertise tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {["Brand Strategy", "Paid Ads", "Conversion Funnels"].map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-sans font-medium text-slate-300 bg-white/5 px-2.5 py-0.5 rounded border border-white/5 group-hover:border-brand-pink/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 font-sans text-sm leading-relaxed mb-4">
                Pioneering high-impact digital marketing strategies, ROI-centric paid ads, and customized brand growth solutions for modern businesses.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 pt-6 border-t border-white/5">
              <a href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-brand-pink hover:bg-brand-pink/10 transition-all hover:scale-105 cursor-pointer" aria-label="LinkedIn Profile">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-brand-pink hover:bg-brand-pink/10 transition-all hover:scale-105 cursor-pointer" aria-label="Instagram Profile">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-brand-pink hover:bg-brand-pink/10 transition-all hover:scale-105 cursor-pointer" aria-label="Email Address">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kabir Malhotra */}
          <div className="glass-card rounded-3xl p-4 sm:p-8 text-center border border-white/5 hover:border-brand-purple/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                {/* Rotating Dashed Border */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-purple/30 group-hover:border-brand-purple/80 animate-[spin_20s_linear_infinite] transition-colors duration-500"></div>
                {/* Static Avatar Container */}
                <div className="w-[128px] h-[128px] rounded-full overflow-hidden bg-slate-950/20 p-1 z-10">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={teamKabir} 
                      alt="Kabir Malhotra" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-white mb-1 group-hover:text-brand-purple transition-colors">Kabir Malhotra</h3>
              <span className="text-brand-purple font-sans text-xs font-black uppercase tracking-widest block mb-4">Creative Director & Production Lead</span>
              
              {/* Expertise tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {["Web Engineering", "UI/UX Design", "Cinematic Editing"].map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-sans font-medium text-slate-300 bg-white/5 px-2.5 py-0.5 rounded border border-white/5 group-hover:border-brand-purple/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 font-sans text-sm leading-relaxed mb-4">
                Directing professional web development, UI/UX aesthetics, ad creatives, and high-engagement video assets that set your brand apart.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 pt-6 border-t border-white/5">
              <a href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-all hover:scale-105 cursor-pointer" aria-label="LinkedIn Profile">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-all hover:scale-105 cursor-pointer" aria-label="Instagram Profile">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-all hover:scale-105 cursor-pointer" aria-label="Email Address">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT FORM SECTION */}
      <span id="contact"></span>
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          {/* Tagline with blinking icon and background */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-brand-green/10 border border-brand-green/20 rounded-full mb-4 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">Get Started Today</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl sm:text-3.5xl md:text-5xl text-white tracking-tight mb-4">
            Get A Free <span className="text-gradient">Proposal</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Ready to scale your brand and grow your revenue? Tell us about your project and our team will reach out with a custom strategy.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-4 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Glow spot */}
          <div className="glow-spot w-[200px] h-[200px] bg-brand-pink/10 top-0 right-0"></div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-montserrat font-bold text-sm mb-2.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Amit Singh"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-montserrat font-bold text-sm mb-2.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={handleInputChange}
                      placeholder="e.g. amit@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-montserrat font-bold text-sm mb-2.5">Website / Social Link</label>
                    <input
                      type="text"
                      name="instagram"
                      required
                      value={contactForm.instagram}
                      onChange={handleInputChange}
                      placeholder="e.g. www.yourbrand.com or @handle"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-montserrat font-bold text-sm mb-2.5">Service Needed / Niche</label>
                    <input
                      type="text"
                      name="niche"
                      required
                      value={contactForm.niche}
                      onChange={handleInputChange}
                      placeholder="e.g. Web Dev, Paid Ads, Graphic Design"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-montserrat font-bold text-sm mb-2.5">Tell us about your business</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current struggle with content creation and what your goals are..."
                    className="form-input resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-accent to-brand-pink hover:from-brand-accent/90 hover:to-brand-pink/90 text-white font-sans font-bold rounded-xl transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:scale-[1.01]"
                >
                  Submit Form <Send className="w-4 h-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center justify-center relative z-10"
              >
                <CheckCircle2 className="w-16 h-16 text-brand-green mb-6 animate-bounce" />
                <h3 className="font-montserrat font-black text-2xl text-white mb-3">Application Submitted!</h3>
                <p className="text-slate-400 font-sans text-base max-w-sm mx-auto leading-normal">
                  Thank you, {contactForm.name}. Our growth strategists will review your brand details and email you within 24 hours to schedule your strategy call.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm text-brand-pink hover:text-brand-accent font-sans font-bold underline"
                >
                  Submit another application
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
