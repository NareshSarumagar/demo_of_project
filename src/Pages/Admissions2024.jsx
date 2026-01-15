import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  DollarSign,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  CheckCircle,
  FileText,
  Upload,
  Download,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Target,
  GraduationCap,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  X,
  Info,
  HelpCircle,
  Bookmark,
  Share2,
  Globe,
  CreditCard,
  Shield,
  Trophy,
  TrendingUp,
  BarChart3,
  Percent,
  Camera,
  Video,
  MessageCircle,
  AlertCircle,
  ThumbsUp,
  Heart,
  Eye,
  Calculator,
  Send,
  CalendarDays,
  Timer,
  FileCheck,
  UserCheck,
  ClipboardCheck,
  Award as AwardIcon,
  BadgeCheck,
  FileQuestion,
  CalendarClock,
  Clock4,
  CalendarRange,
  CalendarPlus,
  CalendarMinus,
  CalendarX,
  CalendarCheck,
  CalendarOff,
  CalendarHeart,
  User,
  Bell,
  BellRing,
  Megaphone,
  Newspaper,
  Radio,
  Podcast,
  Tv,
  Film,
  Image,
  Images,
  FileImage,
  FileVideo,
  Mic,
  Volume2,
  Headphones,
  Music,
  VideoOff,
  MicOff
} from 'lucide-react';

const Admissions2024 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Admission Notice Data
  const admissionNotices = [
    {
      id: 1,
      title: "Official Admission Notice 2024-25",
      date: "January 15, 2024",
      category: "Official Announcement",
      description: "Official commencement of admissions for the academic year 2024-2025",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200",
      important: true
    },
    {
      id: 2,
      title: "Scholarship Application Open",
      date: "February 1, 2024",
      category: "Scholarship",
      description: "Merit-based scholarships applications now open for all programs",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200",
      important: true
    },
    {
      id: 3,
      title: "Extended Deadline for International Students",
      date: "March 15, 2024",
      category: "International",
      description: "Extended application deadline for international applicants",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200",
      important: false
    },
    {
      id: 4,
      title: "Virtual Open House Schedule",
      date: "April 5, 2024",
      category: "Event",
      description: "Join our virtual campus tours and information sessions",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200",
      important: false
    }
  ];

  // Campus Chief Information
  const campusChief = {
    name: "Dr. Sarah Johnson",
    title: "Director of Admissions & Chancellor",
    education: "PhD in Education Management, Harvard University",
    experience: "25+ years in higher education administration",
    quote: "At EduVerse, we don't just select students - we select future leaders who will shape tomorrow's world.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800",
    contact: {
      email: "sarah.johnson@eduverse.edu",
      phone: "+1 (555) 123-4567 ext. 100",
      office: "Administration Building, Room 301"
    },
    achievements: [
      "Increased diversity by 40% in 5 years",
      "Implemented innovative admission processes",
      "Achieved 95% student satisfaction rate"
    ]
  };

  // Admission Statistics 2024
  const admissionStats = [
    { number: "15,000+", label: "Applications Received", change: "+15%", trend: "up" },
    { number: "2,500", label: "Seats Available", change: "+200", trend: "up" },
    { number: "45%", label: "International Applicants", change: "+5%", trend: "up" },
    { number: "$25M", label: "Scholarship Pool", change: "+$5M", trend: "up" }
  ];

  // Important Dates 2024
  const importantDates2024 = [
    { date: "January 15, 2024", event: "Applications Open", status: "active", icon: <CalendarCheck className="w-5 h-5" /> },
    { date: "March 1, 2024", event: "Early Decision Deadline", status: "upcoming", icon: <CalendarClock className="w-5 h-5" /> },
    { date: "April 15, 2024", event: "Regular Decision Deadline", status: "upcoming", icon: <CalendarDays className="w-5 h-5" /> },
    { date: "May 1, 2024", event: "Scholarship Deadline", status: "upcoming", icon: <Award className="w-5 h-5" /> },
    { date: "June 30, 2024", event: "International Student Deadline", status: "upcoming", icon: <Globe className="w-5 h-5" /> },
    { date: "September 3, 2024", event: "Fall Semester Begins", status: "future", icon: <GraduationCap className="w-5 h-5" /> }
  ];

  // Programs with seats
  const programsWithSeats = [
    { program: "Computer Science", seats: 300, filled: 65, color: "from-blue-500 to-cyan-400" },
    { program: "Business Administration", seats: 400, filled: 75, color: "from-purple-500 to-pink-400" },
    { program: "Engineering", seats: 250, filled: 60, color: "from-green-500 to-emerald-400" },
    { program: "Biomedical Sciences", seats: 200, filled: 50, color: "from-orange-500 to-yellow-400" },
    { program: "Psychology", seats: 180, filled: 45, color: "from-red-500 to-rose-400" },
    { program: "International Relations", seats: 150, filled: 40, color: "from-indigo-500 to-blue-400" }
  ];

  // Tabs for navigation
  const tabs = [
    { id: 'overview', name: 'Overview', icon: <Info /> },
    { id: 'notices', name: 'Notices', icon: <Megaphone /> },
    { id: 'requirements', name: 'Requirements', icon: <FileText /> },
    { id: 'dates', name: 'Key Dates', icon: <Calendar /> },
    { id: 'programs', name: 'Programs', icon: <BookOpen /> },
    { id: 'apply', name: 'Apply Now', icon: <Send /> }
  ];

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

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
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
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-30 blur-3xl"
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
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-gray-600 mb-8"
          >
            <a href="/" className="hover:text-blue-600">Home</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="/admissions" className="hover:text-blue-600">Admissions</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-blue-600 font-semibold">Admissions 2024</span>
          </motion.div>

          {/* Main Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-semibold">ACADEMIC YEAR 2024-2025</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Admissions 2024
              </span>
              <br />
              <span className="text-gray-800">Now Open</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Join our community of 25,000+ students from 50+ countries. 
              Applications for the 2024-2025 academic year are now being accepted.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {admissionStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 mb-2">{stat.label}</div>
                  <div className={`flex items-center text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                    {stat.change} from last year
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2">
            <div className="flex space-x-2 mx-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-16"
            >
              {/* Hero Notice */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600"
                  alt="Campus Overview"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-3xl mx-auto text-center text-white p-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Welcome to Admissions 2024
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Join one of the world's leading universities for an education that transforms lives and communities.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('apply')}
                      className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-xl"
                    >
                      Start Your Application
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column - Campus Chief */}
                <motion.div
                  variants={itemVariants}
                  className="lg:col-span-2 space-y-12"
                >
                  {/* Welcome Message */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">A Message from Our Director</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                            <img
                              src={campusChief.image}
                              alt={campusChief.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{campusChief.name}</h3>
                        <p className="text-blue-600 font-semibold mb-4">{campusChief.title}</p>
                        <p className="text-gray-600 mb-6">{campusChief.education}</p>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                          <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-200" />
                          <p className="text-gray-700 italic text-lg leading-relaxed">
                            "{campusChief.quote}"
                          </p>
                        </div>

                        <div className="space-y-4 mb-6">
                          <h4 className="font-bold text-gray-800">Contact Information:</h4>
                          <div className="space-y-3">
                            <div className="flex items-center text-gray-700">
                              <Mail className="w-5 h-5 mr-3 text-blue-600" />
                              <span>{campusChief.contact.email}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Phone className="w-5 h-5 mr-3 text-blue-600" />
                              <span>{campusChief.contact.phone}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                              <span>{campusChief.contact.office}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-800 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {campusChief.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6">Why Choose EduVerse 2024?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { title: "Global Recognition", desc: "Ranked among top 100 universities worldwide" },
                        { title: "Research Excellence", desc: "$50M+ in research funding annually" },
                        { title: "Career Success", desc: "95% placement rate within 6 months" },
                        { title: "Diverse Community", desc: "Students from 50+ countries" }
                      ].map((fact, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <h3 className="text-xl font-bold mb-3">{fact.title}</h3>
                          <p className="text-white/80">{fact.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Quick Info */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-8"
                >
                  {/* Application Deadlines */}
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Application Deadlines</h3>
                    <div className="space-y-4">
                      {importantDates2024.slice(0, 4).map((date, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <span className={`mr-3 ${
                              date.status === 'active' ? 'text-green-600' :
                              date.status === 'upcoming' ? 'text-yellow-600' :
                              'text-gray-400'
                            }`}>
                              {date.icon}
                            </span>
                            <div>
                              <div className="font-semibold text-gray-800">{date.event}</div>
                              <div className="text-sm text-gray-600">{date.date}</div>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-semibold ${
                            date.status === 'active' ? 'bg-green-100 text-green-600' :
                            date.status === 'upcoming' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {date.status === 'active' ? 'Active' : date.status === 'upcoming' ? 'Upcoming' : 'Future'}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveTab('dates')}
                      className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold"
                    >
                      View All Dates
                    </button>
                  </div>

                  {/* Available Seats */}
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Available Seats by Program</h3>
                    <div className="space-y-4">
                      {programsWithSeats.slice(0, 4).map((program, index) => {
                        const percentage = (program.filled / program.seats) * 100;
                        return (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="font-semibold text-gray-800">{program.program}</span>
                              <span className="text-gray-600">{program.filled}/{program.seats} filled</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full bg-gradient-to-r ${program.color}`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <button
                      onClick={() => setActiveTab('programs')}
                      className="w-full mt-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50"
                    >
                      View All Programs
                    </button>
                  </div>

                  {/* Quick Apply */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                    <p className="mb-6 opacity-90">Start your application in just 5 minutes</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('apply')}
                      className="w-full py-3 bg-white text-gray-900 rounded-lg font-bold shadow-lg"
                    >
                      Quick Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Notices Tab */}
          {activeTab === 'notices' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Notices 2024</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Stay updated with all official admission announcements, deadlines, and important updates.
                </p>
              </div>

              {/* Featured Notice */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
                <img
                  src={admissionNotices[0].image}
                  alt={admissionNotices[0].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-3xl mx-auto p-8">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                      <Bell className="w-4 h-4 text-white mr-2" />
                      <span className="text-white text-sm font-semibold">FEATURED NOTICE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {admissionNotices[0].title}
                    </h2>
                    <p className="text-xl text-white/90 mb-6">{admissionNotices[0].description}</p>
                    <div className="flex items-center text-white">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{admissionNotices[0].date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* All Notices Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {admissionNotices.slice(1).map((notice, index) => (
                  <motion.div
                    key={notice.id}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={notice.image}
                        alt={notice.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      {notice.important && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                          IMPORTANT
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {notice.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{notice.title}</h3>
                      <p className="text-gray-600 mb-6">{notice.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                          {notice.category}
                        </span>
                        <button className="text-blue-600 font-semibold flex items-center">
                          Read More
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Section */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Download Official Documents</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Admission Brochure 2024", size: "2.5 MB", icon: <FileText className="w-8 h-8" /> },
                    { title: "Fee Structure", size: "1.2 MB", icon: <DollarSign className="w-8 h-8" /> },
                    { title: "Admission Guidelines", size: "3.1 MB", icon: <BookOpen className="w-8 h-8" /> }
                  ].map((doc, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-6 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg mr-4">
                          <div className="text-blue-600">
                            {doc.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{doc.title}</h4>
                          <p className="text-gray-500 text-sm">{doc.size}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Requirements 2024</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Review the comprehensive requirements for undergraduate, graduate, and international applicants.
                </p>
              </div>

              {/* Requirements Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Undergraduate Programs",
                    color: "from-blue-600 to-cyan-500",
                    requirements: [
                      "High School Diploma or equivalent",
                      "Minimum GPA: 3.0/4.0",
                      "SAT/ACT Scores (optional)",
                      "Personal Statement",
                      "Letter of Recommendation"
                    ],
                    deadline: "April 15, 2024"
                  },
                  {
                    title: "Graduate Programs",
                    color: "from-purple-600 to-pink-500",
                    requirements: [
                      "Bachelor's Degree",
                      "Minimum GPA: 3.2/4.0",
                      "GRE/GMAT Scores",
                      "Research Proposal",
                      "2 Letters of Recommendation"
                    ],
                    deadline: "March 1, 2024"
                  },
                  {
                    title: "International Students",
                    color: "from-green-600 to-emerald-500",
                    requirements: [
                      "TOEFL: 90+ or IELTS: 6.5+",
                      "Visa Documents",
                      "Financial Statement",
                      "Credential Evaluation",
                      "Passport Copy"
                    ],
                    deadline: "June 30, 2024"
                  }
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className={`bg-gradient-to-br ${program.color} rounded-2xl p-8 text-white shadow-2xl`}
                  >
                    <h3 className="text-2xl font-bold mb-6">{program.title}</h3>
                    
                    <div className="mb-8">
                      <h4 className="font-bold mb-4">Requirements:</h4>
                      <ul className="space-y-3">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm opacity-80">Application Deadline</div>
                          <div className="font-bold">{program.deadline}</div>
                        </div>
                        <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Document Checklist */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Required Documents Checklist</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Academic Transcripts", icon: <FileText className="w-8 h-8" />, required: true },
                    { title: "Test Scores", icon: <BarChart3 className="w-8 h-8" />, required: "Optional" },
                    { title: "Personal Statement", icon: <MessageCircle className="w-8 h-8" />, required: true },
                    { title: "Recommendation Letters", icon: <Users className="w-8 h-8" />, required: "2 Required" },
                    { title: "Passport Copy", icon: <Globe className="w-8 h-8" />, required: "International" },
                    { title: "Financial Documents", icon: <DollarSign className="w-8 h-8" />, required: "International" },
                    { title: "Portfolio", icon: <Palette className="w-8 h-8" />, required: "Arts Programs" },
                    { title: "Research Proposal", icon: <Flask className="w-8 h-8" />, required: "Graduate" }
                  ].map((doc, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg mb-4">
                        <div className="text-blue-600">
                          {doc.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">{doc.title}</h4>
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                        doc.required === true ? 'bg-green-100 text-green-600' :
                        doc.required === 'Optional' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {doc.required === true ? 'Required' : doc.required}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Key Dates Tab */}
          {activeTab === 'dates' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Important Dates 2024</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Mark your calendar with these critical dates for the 2024-2025 admission cycle.
                </p>
              </div>

              {/* Timeline View */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 ml-6"></div>
                
                <div className="space-y-8">
                  {importantDates2024.map((date, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-20"
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <div className="text-white">
                          {date.icon}
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{date.event}</h3>
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-5 h-5 mr-2" />
                              <span className="font-semibold">{date.date}</span>
                            </div>
                          </div>
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            date.status === 'active' ? 'bg-green-100 text-green-600' :
                            date.status === 'passed' ? 'bg-gray-100 text-gray-600' :
                            date.status === 'upcoming' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {date.status === 'active' ? 'Active Now' :
                             date.status === 'passed' ? 'Passed' :
                             date.status === 'upcoming' ? 'Upcoming' : 'Future'}
                          </div>
                        </div>
                        
                        {date.status === 'active' && (
                          <div className="flex items-center text-green-600 font-semibold">
                            <BellRing className="w-5 h-5 mr-2" />
                            Applications currently being accepted
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Calendar View */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Academic Calendar 2024-2025</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { term: "Fall Semester 2024", start: "Sep 3, 2024", end: "Dec 20, 2024", applications: "Open" },
                    { term: "Spring Semester 2025", start: "Jan 21, 2025", end: "May 9, 2025", applications: "Opening Soon" },
                    { term: "Summer Session 2025", start: "Jun 2, 2025", end: "Aug 15, 2025", applications: "Not Yet Open" }
                  ].map((term, index) => (
                    <div key={index} className="bg-white rounded-xl p-6">
                      <div className="text-lg font-bold text-gray-800 mb-4">{term.term}</div>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date</span>
                          <span className="font-semibold">{term.start}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">End Date</span>
                          <span className="font-semibold">{term.end}</span>
                        </div>
                      </div>
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                        term.applications === 'Open' ? 'bg-green-100 text-green-600' :
                        term.applications === 'Opening Soon' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {term.applications}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Programs Tab */}
          {activeTab === 'programs' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Programs Offered in 2024</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose from 150+ programs across diverse disciplines. Discover your perfect academic path.
                </p>
              </div>

              {/* Programs Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programsWithSeats.map((program, index) => {
                  const percentage = (program.filled / program.seats) * 100;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -10 }}
                      className={`bg-gradient-to-br ${program.color} rounded-2xl p-8 text-white shadow-2xl`}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{program.program}</h3>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span>{program.seats} Total Seats</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">{program.filled}</div>
                          <div className="text-sm opacity-80">Filled</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Available Seats</span>
                          <span>{Math.round(percentage)}% filled</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-white"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm opacity-80">Remaining</div>
                          <div className="text-xl font-bold">{program.seats - program.filled}</div>
                        </div>
                        <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Program Categories */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Program Categories</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { category: "Science & Technology", count: 45, icon: <Flask className="w-8 h-8" /> },
                    { category: "Business & Management", count: 32, icon: <Briefcase className="w-8 h-8" /> },
                    { category: "Arts & Humanities", count: 28, icon: <Palette className="w-8 h-8" /> },
                    { category: "Health Sciences", count: 25, icon: <Heart className="w-8 h-8" /> }
                  ].map((cat, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg mb-4">
                        <div className="text-blue-600">
                          {cat.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">{cat.category}</h4>
                      <div className="text-2xl font-bold text-blue-600">{cat.count} Programs</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Apply Now Tab */}
          {activeTab === 'apply' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Start Your Application</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Begin your journey to EduVerse University. Our application process is simple and straightforward.
                </p>
              </div>

              {/* Application Steps */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { step: 1, title: "Create Account", icon: <User className="w-8 h-8" />, desc: "Sign up with email" },
                  { step: 2, title: "Fill Form", icon: <FileText className="w-8 h-8" />, desc: "Complete application" },
                  { step: 3, title: "Upload Documents", icon: <Upload className="w-8 h-8" />, desc: "Submit requirements" },
                  { step: 4, title: "Submit & Pay", icon: <CreditCard className="w-8 h-8" />, desc: "Pay application fee" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 text-center border border-gray-100"
                  >
                    <div className="inline-flex w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center mb-4">
                      <div className="text-white text-2xl font-bold">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Application Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Application Form</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Program of Interest *</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a program</option>
                        {programsWithSeats.map(program => (
                          <option key={program.program} value={program.program}>{program.program}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Intake Term *</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select intake term</option>
                        <option value="fall2024">Fall 2024</option>
                        <option value="spring2025">Spring 2025</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Personal Statement *</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your academic goals and why you want to join EduVerse..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start mb-8">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to the Terms of Service and Privacy Policy. I understand that submitting this form does not guarantee admission.
                    </label>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </motion.div>

              {/* Application Help */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "Need Help?",
                    desc: "Contact our admissions team",
                    icon: <Phone className="w-8 h-8" />,
                    action: "Call Now"
                  },
                  {
                    title: "Document Checklist",
                    desc: "Download required documents list",
                    icon: <Download className="w-8 h-8" />,
                    action: "Download"
                  },
                  {
                    title: "Application FAQ",
                    desc: "Common questions answered",
                    icon: <HelpCircle className="w-8 h-8" />,
                    action: "View FAQ"
                  }
                ].map((help, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg inline-block mb-4">
                      {help.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{help.title}</h4>
                    <p className="text-gray-600 mb-4">{help.desc}</p>
                    <button className="text-blue-600 font-semibold flex items-center">
                      {help.action}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of successful students who started their journey at EduVerse University.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('apply')}
              className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-xl"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom Quote Icon Component
const Quote = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default Admissions2024;