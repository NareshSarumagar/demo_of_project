import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Target, 
  Users, 
  Award, 
  Globe, 
  BookOpen, 
  GraduationCap,
  ChevronRight,
  Quote,
  Sparkles,
  Star,
  Zap,
  Heart,
  Lightbulb,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Timeline data
  const timeline = [
    { year: '1965', event: 'University Founded', description: 'Established with 3 departments' },
    { year: '1980', event: 'First Research Center', description: 'Opened Science & Technology Center' },
    { year: '1995', event: 'International Recognition', description: 'Ranked among top 100 universities' },
    { year: '2010', event: 'Modern Campus Built', description: 'State-of-the-art facilities opened' },
    { year: '2024', event: 'Digital Transformation', description: 'Fully integrated smart campus' }
  ];

  // Stats data
  const stats = [
    { number: '59', label: 'Years of Excellence', icon: <Calendar className="text-blue-500" /> },
    { number: '500+', label: 'Faculty Members', icon: <Users className="text-purple-500" /> },
    { number: '150+', label: 'Programs Offered', icon: <BookOpen className="text-green-500" /> },
    { number: '50+', label: 'National Awards', icon: <Trophy className="text-yellow-500" /> }
  ];

  // Values data
  const values = [
    { title: 'Excellence', icon: <Star />, color: 'from-yellow-400 to-orange-500' },
    { title: 'Innovation', icon: <Zap />, color: 'from-blue-400 to-cyan-500' },
    { title: 'Community', icon: <Heart />, color: 'from-red-400 to-pink-500' },
    { title: 'Knowledge', icon: <Lightbulb />, color: 'from-purple-400 to-indigo-500' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <section id="About" className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-b from-blue-200 via-blue-50/10 to-green-200">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl"
        />
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDAgNjAgTCA2MCA2MCBMIDYwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNzRmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-semibold">ABOUT OUR INSTITUTION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Shaping Future
            </span>
            <br />
            <span className="text-gray-800">Since 1965</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A legacy of excellence, innovation, and transformation in higher education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" />
                Our Legacy of Excellence
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 1965, <span className="font-bold text-blue-700">EduVerse University</span> began as a small institution with a big vision: to transform education through innovation and excellence. What started with three departments has grown into a comprehensive university recognized globally for academic rigor and research excellence.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Over nearly six decades, we've evolved into a vibrant academic community where tradition meets innovation. Our journey is marked by groundbreaking research, international collaborations, and a commitment to nurturing leaders who make a difference.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Today, we stand as a beacon of knowledge, empowering 25,000+ students from 50+ countries to achieve their full potential in a dynamic, inclusive learning environment.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`bg-gradient-to-br ${value.color} p-4 rounded-xl shadow-lg text-white`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {value.icon}
                      </div>
                    </div>
                    <h5 className="font-bold text-lg">{value.title}</h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center"
                  >
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Campus Chief & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Campus Chief Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        {/* Campus Chief Photo - Replace with actual image */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-800">Dr. Sarah Johnson</h3>
                      <p className="text-blue-600 font-semibold">University Chancellor</p>
                      <p className="text-gray-600 text-sm mt-1">PhD, Harvard University</p>
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-10"
                  >
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-200" />
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      "At EduVerse, we don't just educate students; we inspire future leaders, innovators, and changemakers. Our commitment is to provide an education that transcends boundaries and transforms lives."
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">25+ Years Leadership</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Interactive Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="mr-3 text-blue-300" />
                Our Journey Through Time
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"></div>
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="relative mb-8 pl-16"
                  >
                    <div className="absolute left-4 top-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="flex items-center mb-2">
                        <div className="text-blue-300 font-bold text-xl">{item.year}</div>
                        <div className="ml-auto text-white/60 text-sm">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Milestone
                        </div>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-1">{item.event}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide transformative educational experiences that empower students to become ethical leaders, innovative problem-solvers, and global citizens who contribute meaningfully to society.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Innovative Learning', 'Research Excellence', 'Community Engagement', 'Global Perspective'].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.7 }}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl mr-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be a world-class university recognized for excellence in teaching, research, and innovation that addresses global challenges and shapes a better future for all.
                </p>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Explore Our Strategic Plan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Accreditation Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Accreditation & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Global Education Council', rating: 'A++' },
              { name: 'International Accreditation Board', rating: '5 Stars' },
              { name: 'Quality Education Network', rating: 'Platinum' },
              { name: 'World University Rankings', rating: 'Top 100' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.rating}</div>
                <div className="text-gray-700 font-medium">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Continue Exploring</span>
          <ChevronRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;