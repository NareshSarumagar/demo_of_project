import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronUp,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Download,
  FileText,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Sparkles,
  Star,
  Zap,
  Shield,
  Lock,
  ArrowUpRight,
  ExternalLink,
  MessageCircle,
  Bell,
  ThumbsUp,
  TrendingUp,
  Target,
  CheckCircle,
  Coffee,
  Music,
  Palette,
  Code,
  Briefcase,
  HeartHandshake,
  Handshake,
  Globe2,
  Building,
  School,
  Library,
  Home,
  Info,
  HelpCircle,
  Calendar,
  Newspaper,
  Podcast,
  Video,
  Camera,
  PhoneCall,
  MailOpen,
  MessageSquare,
  Share2,
  Bookmark,
  Copy,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Cloud,
  Database,
  Server,
  Cpu,
  ShieldCheck,
  LockKeyhole,
  Eye,
  EyeOff,
  Search,
  Filter,
  Menu,
  X,
  User,
  UserPlus,
  LogIn,
  LogOut,
  Settings,
  BellRing,
  StarHalf,
  Award as AwardIcon,
  Trophy,
  Medal,
  Crown,
  Flag,
  Target as TargetIcon,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Bitcoin,
  Gift,
  Package,
  Truck,
  Box,
  ShoppingCart,
  ShoppingBag,
  Tag,
  Percent,
  ShoppingCart as CartIcon,
  ShoppingBag as BagIcon,
  Tag as TagIcon,
  Percent as PercentIcon
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Footer links data
  const footerLinks = {
    academics: [
      { name: 'Undergraduate Programs', href: '#', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Graduate Programs', href: '#', icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'Online Learning', href: '#', icon: <Globe2 className="w-4 h-4" /> },
      { name: 'Faculty Directory', href: '#', icon: <Users className="w-4 h-4" /> },
      { name: 'Course Catalog', href: '#', icon: <FileText className="w-4 h-4" /> }
    ],
    admissions: [
      { name: 'Apply Now', href: '#', icon: <Send className="w-4 h-4" /> },
      { name: 'Admission Requirements', href: '#', icon: <TargetIcon className="w-4 h-4" /> },
      { name: 'Tuition & Fees', href: '#', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Scholarships', href: '#', icon: <AwardIcon className="w-4 h-4" /> },
      { name: 'Financial Aid', href: '#', icon: <Wallet className="w-4 h-4" /> },
      { name: 'International Students', href: '#', icon: <Globe className="w-4 h-4" /> }
    ],
    campus: [
      { name: 'Campus Life', href: '#', icon: <Home className="w-4 h-4" /> },
      { name: 'Student Housing', href: '#', icon: <Building className="w-4 h-4" /> },
      { name: 'Dining Services', href: '#', icon: <Coffee className="w-4 h-4" /> },
      { name: 'Campus Events', href: '#', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Sports & Recreation', href: '#', icon: <Trophy className="w-4 h-4" /> },
      { name: 'Arts & Culture', href: '#', icon: <Palette className="w-4 h-4" /> }
    ],
    resources: [
      { name: 'Library', href: '#', icon: <Library className="w-4 h-4" /> },
      { name: 'Career Services', href: '#', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'Alumni Network', href: '#', icon: <UserPlus className="w-4 h-4" /> },
      { name: 'News & Media', href: '#', icon: <Newspaper className="w-4 h-4" /> },
      { name: 'IT Services', href: '#', icon: <Server className="w-4 h-4" /> },
      { name: 'Campus Safety', href: '#', icon: <ShieldCheck className="w-4 h-4" /> }
    ]
  };

  // Quick contact info
  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: '123 Education Boulevard, Knowledge City, KC 12345' },
    { icon: <Phone className="w-5 h-5" />, text: '+1 (555) 123-4567' },
    { icon: <Mail className="w-5 h-5" />, text: 'info@eduverse.edu' },
    { icon: <Clock className="w-5 h-5" />, text: 'Mon-Fri: 9:00 AM - 5:00 PM EST' }
  ];

  // Social media links
  const socialMedia = [
    { platform: 'Facebook', icon: <Facebook />, color: 'from-blue-600 to-blue-800', href: '#' },
    { platform: 'Twitter', icon: <Twitter />, color: 'from-sky-500 to-blue-500', href: '#' },
    { platform: 'Instagram', icon: <Instagram />, color: 'from-pink-500 to-purple-500', href: '#' },
    { platform: 'LinkedIn', icon: <Linkedin />, color: 'from-blue-700 to-blue-900', href: '#' },
    { platform: 'YouTube', icon: <Youtube />, color: 'from-red-500 to-red-700', href: '#' }
  ];

  // Awards & accreditations
  const awards = [
    { name: 'Top 100 Universities', year: '2024', icon: <Trophy className="w-6 h-6" /> },
    { name: 'AAA Accreditation', year: '2023', icon: <ShieldCheck className="w-6 h-6" /> },
    { name: 'Excellence in Education', year: '2024', icon: <Award className="w-6 h-6" /> },
    { name: 'Green Campus Award', year: '2023', icon: <Heart className="w-6 h-6" /> }
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDAgNjAgTCA2MCA2MCBMIDYwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
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
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 mb-12"
          >
            {/* Logo & Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4"
                >
                  <School className="w-8 h-8" />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold">
                    Edu<span className="text-blue-400">Verse</span>
                  </h2>
                  <p className="text-gray-300 text-sm">University of Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Transforming lives through excellence in education, innovation, 
                and community engagement since 1965.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-blue-400 mr-3">{info.icon}</span>
                    <span>{info.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialMedia.map((social) => (
                    <motion.a
                      key={social.platform}
                      href={social.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gradient-to-br ${social.color} rounded-lg shadow-lg`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            {Object.entries(footerLinks).map(([key, links]) => (
              <motion.div key={key} variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  {key === 'academics' && <BookOpen className="w-5 h-5 mr-2 text-blue-400" />}
                  {key === 'admissions' && <Send className="w-5 h-5 mr-2 text-purple-400" />}
                  {key === 'campus' && <Home className="w-5 h-5 mr-2 text-green-400" />}
                  {key === 'resources' && <Library className="w-5 h-5 mr-2 text-orange-400" />}
                  {key.split('')[0].toUpperCase() + key.slice(1)}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-white transition-colors group"
                      >
                        <span className="text-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-4 h-4" />
                        </span>
                        <span className="mr-2 text-gray-400">{link.icon}</span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 mb-12 border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <Bell className="w-4 h-4 mr-2" />
                  <span className="text-sm font-semibold">STAY UPDATED</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300">
                  Get the latest news, events, and updates from EduVerse University.
                </p>
              </div>

              <div>
                <AnimatePresence>
                  {isSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
                    >
                      <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-4">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Successfully Subscribed!</h4>
                      <p className="text-gray-300">
                        Thank you for subscribing to our newsletter.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubscribe}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Awards & Accreditations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Awards & Accreditations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-blue-500/30 transition-colors"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg mb-4">
                    <div className="text-blue-400">
                      {award.icon}
                    </div>
                  </div>
                  <h4 className="font-bold mb-1">{award.name}</h4>
                  <p className="text-gray-400 text-sm">{award.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: '25,000+', label: 'Students', icon: <Users className="w-6 h-6" /> },
              { number: '150+', label: 'Programs', icon: <BookOpen className="w-6 h-6" /> },
              { number: '95%', label: 'Placement Rate', icon: <Target className="w-6 h-6" /> },
              { number: '50+', label: 'Countries', icon: <Globe className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 text-center backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <span className="mr-2">{stat.icon}</span>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Apps */}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © {currentYear} EduVerse University. All rights reserved.
                </p>
              </div>

              {/* Policy Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' },
                  { name: 'Cookie Policy', href: '#' },
                  { name: 'Accessibility', href: '#' },
                  { name: 'Sitemap', href: '#' }
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
              aria-label="Back to top"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Animated Shapes */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
    </footer>
  );
};

// Custom Apple icon component
const Apple = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.76 3.28-.76 2 .76 3.3.73 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04z" />
  </svg>
);

export default Footer;