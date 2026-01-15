import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Code,  
  Briefcase, 
  Palette,
  Heart,
  Brain,
  Globe,
  TrendingUp,
  Clock,
  Users,
  Award,
  ChevronRight,
  X,
  Sparkles,
  Star,
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  ExternalLink,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle,
  Download,
  Share2,
  Bookmark,
  Filter,
  Search
} from 'lucide-react';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [showAllDetails, setShowAllDetails] = useState(false);

  // Programs data
  const programs = [
    {
      id: 1,
      title: "Computer Science",
      category: "technology",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      duration: "4 Years",
      degree: "Bachelor of Science",
      students: "1,200+",
      rating: "4.8",
      description: "Cutting-edge curriculum in AI, machine learning, and software engineering",
      fullDescription: "Our Computer Science program prepares students for careers in software development, data science, and AI research. The curriculum covers algorithms, data structures, machine learning, and full-stack development with hands-on projects and industry partnerships.",
      highlights: [
        "Industry certifications included",
        "IBM and Google partnerships",
        "95% placement rate",
        "Research opportunities"
      ],
      courses: ["Data Structures", "Machine Learning", "Web Development", "Cybersecurity"],
      facultyCount: 45,
      tuition: "$12,500/year",
      campus: ["Main Campus", "Online Available"]
    },
    {
      id: 2,
      title: "Business Administration",
      category: "business",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-purple-500 to-pink-400",
      duration: "3 Years",
      degree: "Bachelor of Business",
      students: "1,800+",
      rating: "4.7",
      description: "Strategic management, entrepreneurship, and global business strategies",
      fullDescription: "Develop leadership skills and strategic thinking for the global business landscape. Our program emphasizes real-world case studies, internships with Fortune 500 companies, and entrepreneurial opportunities.",
      highlights: [
        "Global internship program",
        "Startup incubation center",
        "Executive mentorship",
        "International study tours"
      ],
      courses: ["Marketing", "Finance", "Operations", "Strategy"],
      facultyCount: 38,
      tuition: "$11,000/year",
      campus: ["Main Campus", "Downtown Campus"]
    },
    {
      id: 3,
      title: "Biomedical Engineering",
      category: "science",
      // icon: <Flask className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      duration: "5 Years",
      degree: "Bachelor of Engineering",
      students: "850+",
      rating: "4.9",
      description: "Innovation in medical devices and healthcare technology",
      fullDescription: "Combine engineering principles with medical sciences to develop innovative healthcare solutions. Program includes research projects, hospital partnerships, and access to state-of-the-art labs.",
      highlights: [
        "Hospital internships",
        "Patent support",
        "Medical device lab access",
        "Research publications"
      ],
      courses: ["Biomechanics", "Medical Imaging", "Tissue Engineering", "Biomaterials"],
      facultyCount: 32,
      tuition: "$14,000/year",
      campus: ["Science Campus"]
    },
    {
      id: 4,
      title: "Psychology",
      category: "arts",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-400",
      duration: "4 Years",
      degree: "Bachelor of Arts",
      students: "1,100+",
      rating: "4.6",
      description: "Understanding human behavior and mental processes",
      fullDescription: "Explore the science of human behavior with clinical and research opportunities. Our program emphasizes both theoretical knowledge and practical application through internships and research projects.",
      highlights: [
        "Clinical practice hours",
        "Research lab access",
        "Industry conferences",
        "Thesis opportunities"
      ],
      courses: ["Cognitive Psychology", "Clinical Methods", "Research Design", "Neuroscience"],
      facultyCount: 28,
      tuition: "$10,500/year",
      campus: ["Main Campus"]
    },
    {
      id: 5,
      title: "Graphic Design",
      category: "arts",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-400",
      duration: "3 Years",
      degree: "Bachelor of Fine Arts",
      students: "750+",
      rating: "4.8",
      description: "Creative design solutions and digital media expertise",
      fullDescription: "Develop professional design skills in digital media, branding, and user experience. Program includes portfolio development, client projects, and industry software training.",
      highlights: [
        "Adobe certification",
        "Portfolio reviews",
        "Design studio access",
        "Client projects"
      ],
      courses: ["Typography", "UX/UI Design", "Motion Graphics", "Branding"],
      facultyCount: 22,
      tuition: "$11,800/year",
      campus: ["Arts Campus", "Online Available"]
    },
    {
      id: 6,
      title: "International Relations",
      category: "arts",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-400",
      duration: "4 Years",
      degree: "Bachelor of Arts",
      students: "650+",
      rating: "4.7",
      description: "Global politics, diplomacy, and international affairs",
      fullDescription: "Analyze global issues and develop diplomatic skills for international careers. Program includes Model UN participation, language studies, and international internships.",
      highlights: [
        "UN internship program",
        "Language immersion",
        "Study abroad semesters",
        "Policy workshops"
      ],
      courses: ["Global Politics", "Diplomacy", "International Law", "Conflict Resolution"],
      facultyCount: 25,
      tuition: "$12,000/year",
      campus: ["Main Campus"]
    },
    {
      id: 7,
      title: "Nursing",
      category: "science",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-orange-400",
      duration: "4 Years",
      degree: "Bachelor of Science",
      students: "1,400+",
      rating: "4.9",
      description: "Clinical expertise and patient-centered care",
      fullDescription: "Prepare for healthcare leadership with comprehensive clinical training and evidence-based practice. Includes hospital rotations, simulation labs, and NCLEX preparation.",
      highlights: [
        "Clinical rotations",
        "Simulation center",
        "NCLEX prep",
        "Hospital partnerships"
      ],
      courses: ["Anatomy", "Pharmacology", "Patient Care", "Public Health"],
      facultyCount: 42,
      tuition: "$13,500/year",
      campus: ["Medical Campus"]
    },
    {
      id: 8,
      title: "Data Science",
      category: "technology",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-400",
      duration: "2 Years",
      degree: "Master of Science",
      students: "450+",
      rating: "4.9",
      description: "Advanced analytics and predictive modeling",
      fullDescription: "Master data-driven decision making with advanced analytics, machine learning, and big data technologies. Includes industry projects and research opportunities.",
      highlights: [
        "Industry datasets",
        "Cloud computing access",
        "Research publications",
        "Data science competitions"
      ],
      courses: ["Statistical Modeling", "Big Data", "Deep Learning", "Data Visualization"],
      facultyCount: 30,
      tuition: "$15,000/year",
      campus: ["Tech Campus", "Online Available"]
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Programs', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology', icon: <Code className="w-5 h-5" /> },
    { id: 'business', name: 'Business', icon: <Briefcase className="w-5 h-5" /> },
    // { id: 'science', name: 'Science', icon: <Flask className="w-5 h-5" /> },
    { id: 'arts', name: 'Arts & Humanities', icon: <Palette className="w-5 h-5" /> }
  ];

  // Filter programs
  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

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

  const cardVariants = {
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
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="Programs" className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-b from-green-200 to-blue-200">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-semibold">ACADEMIC PROGRAMS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="text-gray-800">Future With Us</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose from 150+ programs designed for tomorrow's leaders, innovators, and changemakers
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
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

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search programs..."
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {filteredPrograms.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
              className="relative group"
            >
              {/* Program Card */}
              <div className={`bg-gradient-to-br ${program.color} rounded-2xl p-6 shadow-xl h-full cursor-pointer transform transition-all duration-300`}>
                {/* Top Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    {program.icon}
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span className="ml-1 text-white font-bold">{program.rating}</span>
                  </div>
                </div>

                {/* Program Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <div className="flex items-center text-white/80 mb-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="text-sm">{program.degree}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredProgram === program.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent rounded-2xl p-6 flex flex-col justify-end"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-white"
                      >
                        <h4 className="text-lg font-bold mb-3">Program Highlights</h4>
                        <ul className="space-y-2 mb-6">
                          {program.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-300 mr-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProgram(program)}
                          className="w-full bg-white text-gray-800 py-2 rounded-lg font-semibold flex items-center justify-center"
                        >
                          View Details
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-white mx-auto mb-1" />
                    <span className="text-white text-sm font-bold">{program.students}</span>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 text-white mx-auto mb-1" />
                    <span className="text-white text-sm font-bold">{program.facultyCount}+</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-white mx-auto mb-1" />
                    <span className="text-white text-sm font-bold">95%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Can't Find Your Program?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact our admissions team for personalized guidance and discover custom study paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
              >
                <GraduationCap className="mr-2" />
                Book Program Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <Download className="mr-2" />
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className={`relative bg-gradient-to-r ${selectedProgram.color} p-8`}>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mr-4">
                        {selectedProgram.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{selectedProgram.title}</h2>
                        <p className="text-white/80">{selectedProgram.degree}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-white">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{selectedProgram.duration}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Users className="w-5 h-5 mr-2" />
                        <span>{selectedProgram.students} Students</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Award className="w-5 h-5 mr-2" />
                        <span>{selectedProgram.rating}/5 Rating</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white mb-2">{selectedProgram.tuition}</div>
                    <div className="text-white/80">Per Year</div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedProgram.fullDescription}</p>
                    </div>

                    {showAllDetails ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-8"
                      >
                        {/* Courses */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Core Courses</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {selectedProgram.courses.map((course, index) => (
                              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                                <span className="text-gray-700">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h4>
                          <div className="space-y-3">
                            {selectedProgram.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center">
                                <Zap className="w-5 h-5 text-yellow-500 mr-3" />
                                <span className="text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Campus Locations */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Available Campuses</h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProgram.campus.map((campus, index) => (
                              <div key={index} className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">
                                <MapPin className="w-4 h-4 mr-2" />
                                {campus}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.button
                        onClick={() => setShowAllDetails(true)}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center text-blue-600 font-semibold"
                      >
                        View Full Program Details
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </motion.button>
                    )}
                  </div>

                  {/* Right Column - Quick Actions */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Apply</h4>
                      <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3" />
                          <span>Next intake: September 2024</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="w-5 h-5 mr-3" />
                          <span>Scholarships available</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold shadow-lg"
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Share Program</h4>
                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-3 bg-blue-100 text-blue-600 rounded-lg"
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-3 bg-purple-100 text-purple-600 rounded-lg"
                        >
                          <Bookmark className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-3 bg-green-100 text-green-600 rounded-lg"
                        >
                          <Download className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="text-gray-600 mb-4 sm:mb-0">
                    Need help deciding? <span className="font-bold">Chat with our advisors</span>
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProgram(null)}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Close
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Visit Program Page
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Programs;