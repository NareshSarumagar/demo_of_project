import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  Star,
  StarHalf,
  Heart,
  Award,
  GraduationCap,
  Briefcase,
  Globe,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Share2,
  MessageCircle,
  Camera,
  Video as VideoIcon,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Filter,
  Search,
  Clock,
  User,
  Bookmark,
  Download,
  Copy,
  Eye,
  ThumbsUp,
  MessageSquare,
  Send,
  Mic,
  Headphones,
  X,
  MoreVertical,
  Edit,
  Trash2,
  Save,
  Upload,
  Cloud,
  Sun,
  Moon,
  Wind,
  CloudRain,
  Thermometer,
  Droplet,
  Umbrella,
  CloudDrizzle
} from 'lucide-react';

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState([1, 3, 5]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareData, setShareData] = useState({ email: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullStoryModal, setShowFullStoryModal] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [likedTestimonials, setLikedTestimonials] = useState([1, 2, 4]);
  const [bookmarkedTestimonials, setBookmarkedTestimonials] = useState([2, 6, 7]);
  const [copiedText, setCopiedText] = useState('');

  const videoRef = useRef(null);
  const autoPlayRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Enhanced Testimonial data with more details
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Computer Science, Class of 2023",
      company: "Google",
      position: "Software Engineer",
      quote: "The hands-on projects and industry partnerships at EduVerse gave me the real-world experience that made me stand out during interviews.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800",
      video: "https://assets.mixkit.co/videos/preview/mixkit-student-in-a-computer-lab-52056-large.mp4",
      category: "technology",
      achievements: ["Google Internship", "Dean's List", "Hackathon Winner", "Published Research"],
      stats: { gpa: 3.9, projects: 15, internships: 2, publications: 3 },
      social: { linkedin: "#", twitter: "#" },
      story: "I joined EduVerse with a passion for technology but little practical experience. Through the university's industry partnerships, I secured an internship at Google in my sophomore year. The hands-on curriculum and supportive professors helped me excel, leading to a full-time offer upon graduation.",
      likes: 245,
      shares: 42,
      views: 1250,
      date: "2023-06-15",
      duration: "2:45"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Business Administration, Class of 2022",
      company: "Amazon",
      position: "Product Manager",
      quote: "The entrepreneurial mindset fostered here helped me launch my own startup that was later acquired by Amazon.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=800",
      video: null,
      category: "business",
      achievements: ["Startup Founder", "Young Entrepreneur Award", "MBA Scholarship", "Patent Holder"],
      stats: { gpa: 3.8, projects: 8, internships: 3, startups: 1 },
      social: { linkedin: "#", twitter: "#" },
      story: "As an MBA student, I participated in the university's entrepreneurship program. With mentorship from successful alumni and access to seed funding, I launched my first startup. Two years after graduation, Amazon acquired our company for $25 million.",
      likes: 312,
      shares: 67,
      views: 1890,
      date: "2022-08-22",
      duration: null
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Biomedical Engineering, Class of 2021",
      company: "Johnson & Johnson",
      position: "Research Scientist",
      quote: "The cutting-edge research facilities and mentorship from world-class faculty prepared me for groundbreaking work in medical technology.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?auto=format&fit=crop&w=800",
      video: "https://assets.mixkit.co/videos/preview/mixkit-scientist-in-laboratory-52055-large.mp4",
      category: "science",
      achievements: ["Patent Holder", "Research Grant", "Published Papers", "Innovation Award"],
      stats: { gpa: 3.9, projects: 12, internships: 2, patents: 2 },
      social: { linkedin: "#", twitter: "#" },
      story: "Working in the advanced research labs at EduVerse allowed me to contribute to groundbreaking medical research. My senior thesis project led to a patent that's now being developed into a life-saving medical device.",
      likes: 187,
      shares: 34,
      views: 980,
      date: "2021-05-10",
      duration: "3:20"
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "International Relations, Class of 2020",
      company: "United Nations",
      position: "Policy Advisor",
      quote: "Studying with peers from 50+ countries gave me a truly global perspective that I use every day in international diplomacy.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800",
      video: null,
      category: "arts",
      achievements: ["UN Internship", "Diplomatic Fellowship", "Language Proficiency", "Peace Award"],
      stats: { gpa: 3.7, projects: 10, internships: 4, languages: 5 },
      social: { linkedin: "#", twitter: "#" },
      story: "The diverse student body and study abroad programs gave me invaluable international experience. My UN internship, arranged through the university, turned into a full-time position where I now work on global policy initiatives.",
      likes: 298,
      shares: 55,
      views: 1420,
      date: "2020-07-30",
      duration: null
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Graphic Design, Class of 2023",
      company: "Apple",
      position: "Senior Designer",
      quote: "The design studios here are state-of-the-art. Working on real client projects prepared me perfectly for Silicon Valley.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
      video: "https://assets.mixkit.co/videos/preview/mixkit-designer-working-on-his-project-52053-large.mp4",
      category: "arts",
      achievements: ["Design Awards", "Apple Internship", "Portfolio Excellence", "Client Projects"],
      stats: { gpa: 3.6, projects: 20, internships: 2, awards: 7 },
      social: { linkedin: "#", twitter: "#" },
      story: "The design program's focus on real-world projects gave me a portfolio that impressed Apple recruiters. My final year project was featured in several design publications and directly led to my job offer.",
      likes: 223,
      shares: 41,
      views: 1100,
      date: "2023-05-18",
      duration: "2:15"
    },
    {
      id: 6,
      name: "Emily Chen",
      role: "Data Science, Class of 2022",
      company: "Microsoft",
      position: "Data Scientist",
      quote: "The machine learning courses and access to big datasets gave me the skills that are in high demand in today's job market.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800",
      video: null,
      category: "technology",
      achievements: ["Kaggle Competition", "Research Publication", "AI Fellowship", "Big Data Certification"],
      stats: { gpa: 4.0, projects: 18, internships: 3, competitions: 5 },
      social: { linkedin: "#", twitter: "#" },
      story: "The data science program's emphasis on practical applications gave me hands-on experience with real datasets. Winning a Kaggle competition during my junior year opened doors to multiple job offers from top tech companies.",
      likes: 276,
      shares: 49,
      views: 1560,
      date: "2022-06-25",
      duration: null
    },
    {
      id: 7,
      name: "James Miller",
      role: "Medicine, Class of 2019",
      company: "Mayo Clinic",
      position: "Resident Physician",
      quote: "The hands-on clinical experience and mentorship from leading physicians prepared me for the challenges of modern medicine.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800",
      video: "https://assets.mixkit.co/videos/preview/mixkit-doctor-in-hospital-52052-large.mp4",
      category: "science",
      achievements: ["Research Grant", "Clinical Excellence", "Medical Publication", "Leadership Award"],
      stats: { gpa: 3.9, projects: 15, internships: 5, publications: 8 },
      social: { linkedin: "#", twitter: "#" },
      story: "The medical program's early clinical exposure and research opportunities prepared me for a competitive residency match. My research on innovative treatment methods was published in a major medical journal.",
      likes: 345,
      shares: 72,
      views: 2100,
      date: "2019-08-15",
      duration: "4:10"
    },
    {
      id: 8,
      name: "Lisa Thompson",
      role: "MBA, Class of 2021",
      company: "Goldman Sachs",
      position: "Investment Banker",
      quote: "The MBA program's focus on real-world case studies and networking opportunities opened doors I never imagined possible.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800",
      video: null,
      category: "business",
      achievements: ["Finance Competition", "Leadership Award", "Investment Fellowship", "Case Study Winner"],
      stats: { gpa: 3.8, projects: 12, internships: 3, competitions: 4 },
      social: { linkedin: "#", twitter: "#" },
      story: "The MBA program's case study competitions and alumni network connected me with industry leaders. A summer internship arranged through the university led to a full-time offer at Goldman Sachs.",
      likes: 189,
      shares: 38,
      views: 980,
      date: "2021-07-12",
      duration: null
    }
  ];

  // Categories with counts
  const categories = [
    { id: 'all', name: 'All Stories', icon: <User className="w-5 h-5" />, count: testimonials.length },
    { id: 'technology', name: 'Technology', icon: <Briefcase className="w-5 h-5" />, count: testimonials.filter(t => t.category === 'technology').length },
    { id: 'business', name: 'Business', icon: <GraduationCap className="w-5 h-5" />, count: testimonials.filter(t => t.category === 'business').length },
    { id: 'science', name: 'Science', icon: <Award className="w-5 h-5" />, count: testimonials.filter(t => t.category === 'science').length },
    { id: 'arts', name: 'Arts & Design', icon: <Sparkles className="w-5 h-5" />, count: testimonials.filter(t => t.category === 'arts').length }
  ];

  // Featured testimonials for carousel
  const featuredTestimonials = testimonials.slice(0, 4);

  // Filter and sort testimonials
  const filteredTestimonials = testimonials
    .filter(testimonial => {
      const matchesCategory = activeCategory === 'all' || testimonial.category === activeCategory;
      const matchesSearch = testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          testimonial.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'likes':
          return b.likes - a.likes;
        case 'recent':
          return new Date(b.date) - new Date(a.date);
        default:
          return 0;
      }
    });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [featuredTestimonials.length]);

  // Handle video controls
  const handleVideoClick = (testimonial) => {
    if (activeVideo?.id === testimonial.id) {
      // Toggle play/pause for current video
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } else {
      // Switch to new video
      setActiveVideo(testimonial);
      setIsPlaying(true);
      setIsMuted(true);
    }
  };

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [activeVideo, isPlaying]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Handle carousel navigation
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Handle interactions
  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
    showToast(prev => prev.includes(id) ? 'Removed from favorites' : 'Added to favorites');
  };

  const toggleLike = (id) => {
    setLikedTestimonials(prev => 
      prev.includes(id) 
        ? prev.filter(likeId => likeId !== id)
        : [...prev, id]
    );
    
    // Update likes count
    const testimonialIndex = testimonials.findIndex(t => t.id === id);
    if (testimonialIndex !== -1) {
      const isLiking = !likedTestimonials.includes(id);
      showToast(isLiking ? 'Liked testimonial!' : 'Removed like');
    }
  };

  const toggleBookmark = (id) => {
    setBookmarkedTestimonials(prev => 
      prev.includes(id) 
        ? prev.filter(bookmarkId => bookmarkId !== id)
        : [...prev, id]
    );
    showToast(prev => prev.includes(id) ? 'Removed bookmark' : 'Bookmarked story');
  };

  const shareTestimonial = (testimonial) => {
    const shareUrl = `${window.location.origin}/testimonials/${testimonial.id}`;
    const shareText = `Check out ${testimonial.name}'s success story from EduVerse University: "${testimonial.quote}"`;

    if (navigator.share) {
      navigator.share({
        title: `${testimonial.name}'s Success Story`,
        text: shareText,
        url: shareUrl,
      }).catch(console.error);
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
        showToast('Link copied to clipboard!');
      }).catch(console.error);
    }
  };

  const downloadTestimonial = (testimonial) => {
    const content = `
Success Story: ${testimonial.name}
${testimonial.role}
${testimonial.position} at ${testimonial.company}

"${testimonial.quote}"

Achievements:
${testimonial.achievements.map(ach => `• ${ach}`).join('\n')}

Statistics:
• GPA: ${testimonial.stats.gpa}
• Projects: ${testimonial.stats.projects}
• Internships: ${testimonial.stats.internships}

Date: ${new Date(testimonial.date).toLocaleDateString()}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Testimonial downloaded!');
  };

  const handleShareSubmit = (e) => {
    e.preventDefault();
    console.log('Sharing story:', shareData);
    showToast('Story submitted successfully!');
    setShareData({ email: '', message: '' });
    setShowShareModal(false);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setShowSuccessToast(true);
    
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    
    toastTimeoutRef.current = setTimeout(() => {
      setShowSuccessToast(false);
      setToastMessage('');
    }, 3000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 text-yellow-400 fill-current" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-semibold">SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Hear From Our
            </span>
            <br />
            <span className="text-gray-800">Success Stories</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real stories from students and alumni who transformed their lives at EduVerse.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="likes">Sort by Likes</option>
                <option value="recent">Sort by Recent</option>
              </select>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShareModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Share Your Story
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-transparent z-10" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-3xl mx-auto p-8 text-white">
                    <Quote className="w-12 h-12 text-white/30 mb-6" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      "{testimonial.quote}"
                    </h3>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{testimonial.name}</h4>
                        <p className="text-white/80">{testimonial.role}</p>
                        <div className="flex items-center mt-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{testimonial.position} at {testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                    {testimonial.video && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleVideoClick(testimonial)}
                        className="absolute bottom-8 right-8 p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    if (autoPlayRef.current) {
                      clearInterval(autoPlayRef.current);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                  {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(testimonial.id)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full"
                  >
                    <Heart className={`w-5 h-5 ${
                      favorites.includes(testimonial.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleBookmark(testimonial.id)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full"
                  >
                    <Bookmark className={`w-5 h-5 ${
                      bookmarkedTestimonials.includes(testimonial.id) 
                        ? 'text-blue-500 fill-current' 
                        : 'text-gray-600'
                    }`} />
                  </motion.button>
                </div>

                {testimonial.video && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleVideoClick(testimonial)}
                    className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full"
                  >
                    <Play className="w-5 h-5 text-blue-600" />
                  </motion.button>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-gray-600 font-semibold">{testimonial.rating}/5</span>
                </div>

                <Quote className="w-6 h-6 text-gray-300 mb-2" />
                <p className="text-gray-700 italic mb-6 line-clamp-3">"{testimonial.quote}"</p>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="flex justify-between text-center border-t border-b py-4 mb-6">
                  <button 
                    onClick={() => toggleLike(testimonial.id)}
                    className="flex flex-col items-center hover:text-blue-600"
                  >
                    <ThumbsUp className={`w-5 h-5 mb-1 ${
                      likedTestimonials.includes(testimonial.id) 
                        ? 'text-blue-600 fill-current' 
                        : 'text-gray-600'
                    }`} />
                    <span className="text-sm font-semibold">{testimonial.likes}</span>
                  </button>
                  
                  <button 
                    onClick={() => shareTestimonial(testimonial)}
                    className="flex flex-col items-center hover:text-purple-600"
                  >
                    <Share2 className="w-5 h-5 mb-1 text-gray-600" />
                    <span className="text-sm font-semibold">{testimonial.shares}</span>
                  </button>
                  
                  <div className="flex flex-col items-center">
                    <Eye className="w-5 h-5 mb-1 text-gray-600" />
                    <span className="text-sm font-semibold">{testimonial.views}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
                  >
                    View Story
                  </motion.button>
                  
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => downloadTestimonial(testimonial)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      title="Download"
                    >
                      <Download className="w-5 h-5 text-gray-600" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => shareTestimonial(testimonial)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      title="Share"
                    >
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Share Your Success Story</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Are you an EduVerse alum? We'd love to feature your journey and inspire future students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShareModal(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Share Your Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50"
              >
                View All Stories
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => {
                  setActiveVideo(null);
                  setIsPlaying(false);
                }}
                className="absolute -top-12 right-0 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="bg-black rounded-2xl overflow-hidden">
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={activeVideo.video}
                    className="w-full h-auto"
                    controls={false}
                    autoPlay={isPlaying}
                    muted={isMuted}
                    loop
                    playsInline
                    onEnded={() => setIsPlaying(false)}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleVideoClick(activeVideo)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30"
                        >
                          {isPlaying ? 
                            <Pause className="w-6 h-6 text-white" /> : 
                            <Play className="w-6 h-6 text-white" />
                          }
                        </button>
                        
                        <button
                          onClick={toggleMute}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30"
                        >
                          {isMuted ? 
                            <VolumeX className="w-6 h-6 text-white" /> : 
                            <Volume2 className="w-6 h-6 text-white" />
                          }
                        </button>
                      </div>

                      <div className="text-white">
                        <h3 className="font-bold text-lg">{activeVideo.name}</h3>
                        <p className="text-sm text-gray-300">{activeVideo.role}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => downloadTestimonial(activeVideo)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30"
                          title="Download"
                        >
                          <Download className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={() => shareTestimonial(activeVideo)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30"
                          title="Share"
                        >
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mr-6">
                      <img
                        src={selectedTestimonial.image}
                        alt={selectedTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">{selectedTestimonial.name}</h2>
                      <p className="text-blue-600 font-semibold">{selectedTestimonial.role}</p>
                      <div className="flex items-center text-gray-600 mt-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{selectedTestimonial.position} at {selectedTestimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleFavorite(selectedTestimonial.id)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                      title="Favorite"
                    >
                      <Heart className={`w-5 h-5 ${
                        favorites.includes(selectedTestimonial.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-600'
                      }`} />
                    </button>
                    <button
                      onClick={() => setSelectedTestimonial(null)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
                      <Quote className="w-8 h-8 text-blue-300 mb-4" />
                      <p className="text-xl text-gray-700 italic">"{selectedTestimonial.quote}"</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Story</h3>
                      <p className="text-gray-600 mb-4">{selectedTestimonial.story}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedTestimonial.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl">
                            <Award className="w-6 h-6 text-yellow-500 mr-4" />
                            <span className="font-semibold text-gray-800">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-800 mb-4">Academic Performance</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">GPA</span>
                          <span className="text-2xl font-bold text-gray-800">{selectedTestimonial.stats.gpa}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Projects Completed</span>
                          <span className="text-2xl font-bold text-gray-800">{selectedTestimonial.stats.projects}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Internships</span>
                          <span className="text-2xl font-bold text-gray-800">{selectedTestimonial.stats.internships}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-800 mb-4">Engagement</h3>
                      <div className="space-y-3">
                        <button 
                          onClick={() => toggleLike(selectedTestimonial.id)}
                          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center"
                        >
                          <ThumbsUp className="w-5 h-5 mr-2" />
                          Like ({selectedTestimonial.likes})
                        </button>
                        <button 
                          onClick={() => shareTestimonial(selectedTestimonial)}
                          className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold flex items-center justify-center"
                        >
                          <Share2 className="w-5 h-5 mr-2" />
                          Share Story
                        </button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                      <h3 className="font-bold mb-4">Connect</h3>
                      <div className="flex space-x-3">
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                          <MessageSquare className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Share Story Modal */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Share Your Story</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <form onSubmit={handleShareSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={shareData.email}
                    onChange={(e) => setShareData({...shareData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Story *</label>
                  <textarea
                    required
                    value={shareData.message}
                    onChange={(e) => setShareData({...shareData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your journey at EduVerse..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowShareModal(false)}
                    className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg"
                  >
                    Submit Story
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 py-4 rounded-xl shadow-lg flex items-center">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;