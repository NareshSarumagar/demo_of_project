import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera,
  Video,
  Calendar,
  MapPin,
  Users,
  Music,
  Trophy,
  BookOpen,
  Coffee,
  Heart,
  Star,
  ChevronRight,
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  Download,
  Filter,
  Search,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  ExternalLink,
  Sparkles,
  Zap,
  Globe,
  Award,
  GraduationCap
} from 'lucide-react';

const CampusLife = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('events');
  const [showGallery, setShowGallery] = useState(false);
  const videoRef = useRef(null);

  // Campus Events Data
  const events = [
    {
      id: 1,
      title: "Annual Cultural Fest",
      category: "cultural",
      date: "Oct 15-17, 2024",
      location: "Main Auditorium",
      description: "Three days of music, dance, and cultural performances from around the world",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
      photos: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w-800",
        "https://images.unsplash.com/photo-1492684223066-dd23140edf6d?auto=format&fit=crop&w=800"
      ],
      video: "../bgvideo.mp4",
      attendees: "5,000+",
      highlights: ["Live Music", "Food Stalls", "Art Exhibition", "Dance Competitions"]
    },
    {
      id: 2,
      title: "Tech Innovation Summit",
      category: "tech",
      date: "Nov 5-6, 2024",
      location: "Tech Center",
      description: "Annual technology conference featuring industry leaders and student innovations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
      photos: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800"
      ],
      video: "https://assets.mixkit.co/videos/preview/mixkit-students-in-a-computer-lab-52056-large.mp4",
      attendees: "2,500+",
      highlights: ["AI Workshops", "Startup Pitches", "VR Demos", "Hackathon"]
    },
    {
      id: 3,
      title: "Sports Championship",
      category: "sports",
      date: "Dec 10-12, 2024",
      location: "University Stadium",
      description: "Inter-college sports competition with 20+ participating universities",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800",
      photos: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800"
      ],
      video: "https://assets.mixkit.co/videos/preview/mixkit-students-in-the-university-stadium-52100-large.mp4",
      attendees: "3,000+",
      highlights: ["Football Finals", "Basketball", "Track & Field", "Opening Ceremony"]
    },
    {
      id: 4,
      title: "Literature Festival",
      category: "arts",
      date: "Sep 22-24, 2024",
      location: "Library Complex",
      description: "Celebrating literature with author talks, poetry slams, and book launches",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800",
      photos: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800"
      ],
      video: "https://assets.mixkit.co/videos/preview/mixkit-students-studying-in-the-library-52103-large.mp4",
      attendees: "1,800+",
      highlights: ["Author Meetups", "Poetry Readings", "Book Fair", "Writing Workshops"]
    }
  ];

  // Campus Facilities
  const facilities = [
    {
      id: 1,
      title: "Modern Library",
      icon: <BookOpen className="w-8 h-8" />,
      description: "24/7 access with 500,000+ resources",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600",
      stats: "500K+ Books"
    },
    {
      id: 2,
      title: "Sports Complex",
      icon: <Trophy className="w-8 h-8" />,
      description: "Olympic-sized pool, gym, and courts",
      image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?auto=format&fit=crop&w=600",
      stats: "15+ Sports"
    },
    {
      id: 3,
      title: "Student Center",
      icon: <Users className="w-8 h-8" />,
      description: "Clubs, cafes, and social spaces",
      image: "https://images.unsplash.com/photo-1519452639340-ef50a6e7e5f5?auto=format&fit=crop&w=600",
      stats: "50+ Clubs"
    },
    {
      id: 4,
      title: "Arts Center",
      icon: <Music className="w-8 h-8" />,
      description: "Theaters, studios, and galleries",
      image: "https://images.unsplash.com/photo-1547825407-d21c9d49f5c6?auto=format&fit=crop&w=600",
      stats: "Art Studios"
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Events', icon: <Calendar className="w-5 h-5" /> },
    { id: 'cultural', name: 'Cultural', icon: <Globe className="w-5 h-5" /> },
    { id: 'tech', name: 'Tech', icon: <Zap className="w-5 h-5" /> },
    { id: 'sports', name: 'Sports', icon: <Trophy className="w-5 h-5" /> },
    { id: 'arts', name: 'Arts', icon: <Music className="w-5 h-5" /> }
  ];

  // Tabs
  const tabs = [
    { id: 'events', name: 'Events', icon: <Calendar /> },
    { id: 'facilities', name: 'Facilities', icon: <Award /> },
    { id: 'gallery', name: 'Gallery', icon: <Camera /> }
  ];

  // Filter events
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

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
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const videoControls = {
    play: () => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    },
    pause: () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    },
    toggleMute: () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      }
    }
  };

  const handleVideoClick = () => {
    if (selectedMedia?.type === 'video') {
      if (isVideoPlaying) {
        videoControls.pause();
      } else {
        videoControls.play();
      }
    }
  };

  return (
    <section id="campus-life" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-200 to-green-200">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-semibold">CAMPUS LIFE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Experience Campus
            </span>
            <br />
            <span className="text-gray-800">Beyond Classrooms</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover vibrant student life, world-class facilities, and unforgettable campus experiences
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg border">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Section */}
        {activeTab === 'events' && (
          <>
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Events Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                >
                  {/* Event Image/Video Thumbnail */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Video Play Button Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMedia({ type: 'video', data: event });
                        }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </motion.button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {event.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 mb-1">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{event.attendees}</span>
                        </div>
                        <div className="text-sm text-gray-500">Attendees</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>

                    {/* Event Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.highlights.map((highlight, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMedia({ type: 'gallery', data: event })}
                        className="flex items-center text-blue-600 font-semibold"
                      >
                        <Camera className="w-5 h-5 mr-2" />
                        View Photos
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMedia({ type: 'video', data: event })}
                        className="flex items-center text-purple-600 font-semibold"
                      >
                        <Video className="w-5 h-5 mr-2" />
                        Watch Video
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Upcoming Events CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h3>
                  <p className="text-gray-600">Subscribe to our campus events newsletter</p>
                </div>
                <div className="flex gap-4 mt-4 lg:mt-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg"
                  >
                    Subscribe Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-xl font-bold"
                  >
                    View Calendar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* Facilities Section */}
        {activeTab === 'facilities' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Facilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility) => (
                <motion.div
                  key={facility.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                        <div className="text-white">
                          {facility.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
                        <p className="text-blue-600 font-semibold">{facility.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Virtual Tour */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-6 lg:mb-0 lg:mr-8">
                  <h3 className="text-3xl font-bold mb-4">Virtual Campus Tour</h3>
                  <p className="text-gray-300 mb-6">
                    Explore our campus from anywhere in the world with our interactive 360° virtual tour
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Start Virtual Tour
                  </motion.button>
                </div>
                <div className="relative w-full lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl overflow-hidden">
                    {/* Placeholder for 360° tour embed */}
                    <div className="w-full h-full flex items-center justify-center">
                      <Play className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Gallery Section */}
        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {events.flatMap(event => event.photos.slice(0, 2)).map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedMedia({ type: 'image', data: photo })}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                >
                  <img
                    src={photo}
                    alt={`Campus life ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowGallery(!showGallery)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg"
              >
                {showGallery ? 'Show Less' : 'View More Photos & Videos'}
                <ChevronRight className={`w-5 h-5 ml-2 inline transition-transform ${showGallery ? 'rotate-90' : ''}`} />
              </motion.button>
            </div>

            {/* Expanded Gallery */}
            <AnimatePresence>
              {showGallery && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                    {events.flatMap(event => [
                      ...event.photos.slice(2),
                      event.video ? { type: 'video', src: event.video, title: event.title } : null
                    ].filter(Boolean)).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        onClick={() => {
                          if (item.type === 'video') {
                            setSelectedMedia({ type: 'video', data: events.find(e => e.title === item.title) });
                          } else {
                            setSelectedMedia({ type: 'image', data: item });
                          }
                        }}
                        className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                          item.type === 'video' ? 'aspect-video' : 'aspect-square'
                        }`}
                      >
                        {item.type === 'video' ? (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="w-12 h-12 text-white/70" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                              <Video className="w-5 h-5 text-white mb-2" />
                              <p className="text-white font-semibold">{item.title} Video</p>
                            </div>
                          </>
                        ) : (
                          <img
                            src={item}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Follow Campus Life</h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Instagram />, label: 'Instagram', color: 'from-pink-500 to-orange-500' },
              { icon: <Youtube />, label: 'YouTube', color: 'from-red-500 to-pink-500' },
              { icon: <Facebook />, label: 'Facebook', color: 'from-blue-500 to-cyan-500' },
              { icon: <Twitter />, label: 'Twitter', color: 'from-sky-500 to-blue-500' }
            ].map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className={`flex flex-col items-center p-4 bg-gradient-to-br ${social.color} text-white rounded-xl shadow-lg`}
              >
                {social.icon}
                <span className="mt-2 text-sm font-semibold">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => {
              setSelectedMedia(null);
              setIsVideoPlaying(false);
            }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSelectedMedia(null);
                  setIsVideoPlaying(false);
                }}
                className="absolute -top-12 right-0 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Media Content */}
              <div className="bg-black rounded-2xl overflow-hidden">
                {selectedMedia.type === 'image' ? (
                  <div className="relative">
                    <img
                      src={selectedMedia.data}
                      alt="Full size"
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>
                ) : selectedMedia.type === 'video' ? (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={selectedMedia.data.video}
                      className="w-full h-auto max-h-[80vh]"
                      controls={false}
                      autoPlay={isVideoPlaying}
                      muted={isMuted}
                      loop
                      playsInline
                      onClick={handleVideoClick}
                    />
                    
                    {/* Custom Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleVideoClick}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                          >
                            {isVideoPlaying ? 
                              <Pause className="w-6 h-6 text-white" /> : 
                              <Play className="w-6 h-6 text-white" />
                            }
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={videoControls.toggleMute}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                          >
                            {isMuted ? 
                              <VolumeX className="w-6 h-6 text-white" /> : 
                              <Volume2 className="w-6 h-6 text-white" />
                            }
                          </motion.button>
                        </div>

                        <div className="text-white">
                          <h3 className="font-bold text-lg">{selectedMedia.data.title}</h3>
                          <p className="text-sm text-gray-300">{selectedMedia.data.date}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                          >
                            <Download className="w-5 h-5 text-white" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                          >
                            <Share2 className="w-5 h-5 text-white" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedMedia.type === 'gallery' ? (
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-6">{selectedMedia.data.title} Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedMedia.data.photos.map((photo, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                          onClick={() => setSelectedMedia({ type: 'image', data: photo })}
                        >
                          <img
                            src={photo}
                            alt={`${selectedMedia.data.title} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusLife;