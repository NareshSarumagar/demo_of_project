import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  Award, 
  Users, 
  BookOpen, 
  Globe,
  Sparkles,
  Star,
  Target,
  Zap,
  GraduationCap
} from 'lucide-react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const controls = useAnimation();

  // Stats data
  const stats = [
    { number: "95%", label: "Placement Rate", icon: <Target className="text-blue-400" />, color: "from-blue-500 to-cyan-400" },
    { number: "150+", label: "Courses", icon: <BookOpen className="text-purple-400" />, color: "from-purple-500 to-pink-400" },
    { number: "25K+", label: "Students", icon: <Users className="text-green-400" />, color: "from-green-500 to-emerald-400" },
    { number: "50+", label: "Countries", icon: <Globe className="text-orange-400" />, color: "from-orange-500 to-yellow-400" }
  ];

  const floatingElements = [
  { id: "cap", icon: <GraduationCap />, size: "w-12 h-12", delay: 0 },
  { id: "star", icon: <Star />, size: "w-8 h-8", delay: 1 },
  { id: "spark", icon: <Sparkles />, size: "w-10 h-10", delay: 2 },
  { id: "zap", icon: <Zap />, size: "w-9 h-9", delay: 0.5 },
  { id: "award", icon: <Award />, size: "w-11 h-11", delay: 1.5 }
];


  // Rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate floating elements
 useEffect(() => {
  controls.start(i => ({
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 3,
      delay: i * 0.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }));
}, [controls]);


  return (
    <section id='Home' className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="../video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/70 to-purple-900/90"></div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNDAgMTBoMjBtLTIwIDBoMjBtLTIwIDBoMjBNMCAxMGg2ME0wIDMwaDYwTTAgNTBoNjBNMTAgMHY2MG0yMC0yMHY2MG0yMC0yMHY2MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Floating Animated Elements */}
     {floatingElements.map((element, index) => (
  <motion.div
    key={element.id}
    custom={index}
    animate={controls}
    initial={{ opacity: 0, scale: 0 }}
    className={`absolute ${element.size} hidden lg:block`}
    style={{
      left: `${15 + index * 15}%`,
      top: `${20 + index * 10}%`
    }}
  >
    {element.icon}
  </motion.div>
))}


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 lg:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-semibold text-white">
              🏆 Ranked #1 in Education Excellence 2024
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Shape Your Future
              </span>
              <br />
              <span className="text-white">With World-Class Education</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl"
            >
              Join 25,000+ students from 50+ countries in our innovative learning environment.
              Discover programs that transform ambition into achievement.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center"
            >
              <span>Explore Programs</span>
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Book Campus Tour
            </motion.button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
             {stats.map((stat, index) => (
  <motion.div
    key={stat.label}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: currentStat === index ? 1 : 0.7,
      scale: currentStat === index ? 1.05 : 1,
      y: currentStat === index ? -5 : 0
    }}
    transition={{ duration: 0.3 }}
    className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-6"
  >

                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-10 blur-xl rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    {stat.icon}
                    {currentStat === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                    )}
                  </div>
                  <motion.div
                    key={stat.number}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed bottom-8 right-8 z-20"
          >
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                {isVideoPlaying ? 
                  <Pause className="w-5 h-5 text-white" /> : 
                  <Play className="w-5 h-5 text-white" />
                }
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                {isMuted ? 
                  <VolumeX className="w-5 h-5 text-white" /> : 
                  <Volume2 className="w-5 h-5 text-white" />
                }
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center text-white/60"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Wave Bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-amber-100"
          />
        </svg>
      </div> */}

      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: [
                Math.random() * 100 + 'vw',
                Math.random() * 100 + 'vw',
                Math.random() * 100 + 'vw'
              ],
              y: [
                Math.random() * 100 + 'vh',
                Math.random() * 100 + 'vh',
                Math.random() * 100 + 'vh'
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;