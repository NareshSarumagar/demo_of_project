import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Globe,
  Building,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Star,
  CheckCircle,
  X,
  Upload,
  Download,
  Share2,
  Bookmark,
  Copy,
  Smartphone,
  Video,
  Calendar,
  User,
  MessageCircle,
  Award,
  Zap,
  Target,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MailOpen,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  ThumbsUp
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  const [copySuccess, setCopySuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const fileInputRef = useRef(null);

  // Contact departments
  const departments = [
    {
      id: 1,
      title: "Admissions Office",
      description: "Program inquiries and applications",
      email: "admissions@eduverse.edu",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-5PM",
      // icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      team: "Sarah Johnson & Team"
    },
    {
      id: 2,
      title: "Student Services",
      description: "Support for current students",
      email: "services@eduverse.edu",
      phone: "+1 (555) 123-4568",
      hours: "24/7 Online Support",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-400",
      team: "Michael Chen & Team"
    },
    {
      id: 3,
      title: "International Office",
      description: "Visa and international student support",
      email: "international@eduverse.edu",
      phone: "+1 (555) 123-4569",
      hours: "Mon-Fri: 8AM-6PM",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      team: "Maria Rodriguez & Team"
    },
    {
      id: 4,
      title: "Career Services",
      description: "Internships and job placement",
      email: "careers@eduverse.edu",
      phone: "+1 (555) 123-4570",
      hours: "Mon-Fri: 10AM-4PM",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-400",
      team: "David Wilson & Team"
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      id: 'form',
      title: 'Contact Form',
      description: 'Send us a detailed message',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'call',
      title: 'Call Us',
      description: 'Speak directly with our team',
      icon: <Phone className="w-6 h-6" />,
      color: 'green'
    },
    {
      id: 'visit',
      title: 'Visit Campus',
      description: 'Schedule a campus tour',
      icon: <MapPin className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Instant online support',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'orange'
    }
  ];

  // FAQ questions
  const faqs = [
    {
      question: "What are your office hours?",
      answer: "Our main office is open Monday through Friday, 9:00 AM to 5:00 PM EST. Online support is available 24/7 through our website.",
      category: "General"
    },
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond within 24-48 hours during business days. Urgent inquiries are prioritized.",
      category: "Response"
    },
    {
      question: "Can I schedule a campus tour online?",
      answer: "Yes! You can schedule a campus tour through our online booking system. Tours are available Monday through Saturday.",
      category: "Visit"
    },
    {
      question: "Do you have emergency contact numbers?",
      answer: "For emergencies, please call our campus security at +1 (555) 911-1111. This line is monitored 24/7.",
      category: "Emergency"
    }
  ];

  // Social media links
  const socialMedia = [
    { platform: 'Facebook', icon: <Facebook />, color: 'from-blue-600 to-blue-800', handle: '@EduVerseUniversity' },
    { platform: 'Twitter', icon: <Twitter />, color: 'from-sky-500 to-blue-500', handle: '@EduVerse_Uni' },
    { platform: 'Instagram', icon: <Instagram />, color: 'from-pink-500 to-purple-500', handle: '@eduverse_university' },
    { platform: 'LinkedIn', icon: <Linkedin />, color: 'from-blue-700 to-blue-900', handle: 'EduVerse University' },
    { platform: 'YouTube', icon: <Youtube />, color: 'from-red-500 to-red-700', handle: 'EduVerse University' }
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -1 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          department: '',
          preferredContact: 'email'
        });
        setSelectedFile(null);
      }, 1000);
    } else {
      setFormErrors(errors);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setSelectedFile(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  return (
    <section id="Contact" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-200 to-green-200">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-blue-400 to-cyan-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"
        />
        
        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
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
          <div className="inline-flex items-center px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-semibold">CONTACT US</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
            <br />
            <span className="text-gray-800">We're Here to Help</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Have questions? Our team is ready to assist you with any inquiries about admissions, programs, or campus life.
          </p>
        </motion.div>

        {/* Contact Methods Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contactMethods.map((method) => (
            <motion.button
              key={method.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(method.id)}
              className={`flex items-center px-6 py-3 rounded-xl transition-all ${
                activeTab === method.id
                  ? `bg-linear-to-r from-${method.color}-600 to-${method.color}-400 text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              <span className={`mr-3 ${activeTab === method.id ? 'text-white' : `text-${method.color}-600`}`}>
                {method.icon}
              </span>
              <div className="text-left">
                <div className="font-semibold">{method.title}</div>
                <div className="text-sm opacity-75">{method.description}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            {activeTab === 'form' && (
              <motion.div
                variants={formVariants}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-6">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-8">
                        Thank you for contacting us. We'll get back to you within 24-48 hours.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <form id='form' onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                formErrors.name ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Enter your full name"
                            />
                          </div>
                          {formErrors.name && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                formErrors.email ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="you@example.com"
                            />
                          </div>
                          {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Department
                          </label>
                          <select
                            value={formData.department}
                            onChange={(e) => handleInputChange('department', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select a department</option>
                            {departments.map(dept => (
                              <option key={dept.id} value={dept.title}>{dept.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Message *
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={5}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            formErrors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Please provide details about your inquiry..."
                        />
                        {formErrors.message && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                        )}
                      </div>

                      {/* File Upload */}
                      <div className="mb-8">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Attach Files (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"
                             onClick={() => fileInputRef.current.click()}>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                          <p className="text-gray-500 text-sm">PDF, DOC, JPG up to 5MB</p>
                          <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileUpload}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                        </div>
                        {selectedFile && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-between mt-3 p-3 bg-blue-50 rounded-lg"
                          >
                            <div className="flex items-center">
                              <FileText className="w-5 h-5 text-blue-600 mr-3" />
                              <span className="text-gray-700">{selectedFile.name}</span>
                            </div>
                            <button
                              onClick={() => setSelectedFile(null)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </motion.div>
                        )}
                      </div>

                      {/* Preferred Contact Method */}
                      <div className="mb-8">
                        <label className="block text-gray-700 font-semibold mb-3">
                          Preferred Contact Method
                        </label>
                        <div className="flex flex-wrap gap-4">
                          {[
                            { value: 'email', label: 'Email', icon: <Mail className="w-5 h-5" /> },
                            { value: 'phone', label: 'Phone Call', icon: <Phone className="w-5 h-5" /> },
                            { value: 'both', label: 'Both', icon: <MessageSquare className="w-5 h-5" /> }
                          ].map((option) => (
                            <label key={option.value} className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="contactMethod"
                                value={option.value}
                                checked={formData.preferredContact === option.value}
                                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                className="sr-only"
                              />
                              <div className={`flex items-center px-4 py-3 rounded-lg border transition-all ${
                                formData.preferredContact === option.value
                                  ? 'bg-blue-50 border-blue-500 text-blue-600'
                                  : 'border-gray-300 text-gray-600 hover:border-blue-300'
                              }`}>
                                <span className="mr-2">{option.icon}</span>
                                {option.label}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Call Us Section */}
            {activeTab === 'call' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-6">
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us Directly</h3>
                  <p className="text-gray-600">Our team is ready to assist you during business hours.</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Main Contact Number</div>
                        <div className="text-2xl font-bold text-gray-800">+1 (555) 123-4567</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyToClipboard('+1 (555) 123-4567', 'main')}
                        className="p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        <Copy className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Mon-Fri: 9:00 AM - 5:00 PM EST</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-gray-600 text-sm mb-1">Emergency Line</div>
                      <div className="font-semibold text-gray-800">+1 (555) 911-1111</div>
                      <div className="text-xs text-gray-500 mt-1">24/7 Available</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-gray-600 text-sm mb-1">Fax Number</div>
                      <div className="font-semibold text-gray-800">+1 (555) 123-4568</div>
                      <div className="text-xs text-gray-500 mt-1">For documents</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">Call Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Have your student ID ready (if applicable)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Note down the purpose of your call
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Call during less busy hours (10AM-12PM)
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Visit Campus Section */}
            {activeTab === 'visit' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mb-6">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Campus</h3>
                  <p className="text-gray-600">Experience our facilities firsthand with a guided tour.</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Main Campus Address</div>
                      <p className="text-gray-600">123 Education Boulevard, Knowledge City, KC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Visitor Hours</div>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Tours by appointment only</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl mb-6 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule Campus Tour
                </motion.button>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Parking Information</h4>
                  <p className="text-gray-600 mb-3">Visitor parking is available in Lot A. Please obtain a visitor pass at the security gate.</p>
                  <div className="flex items-center text-gray-600">
                    <Info className="w-4 h-4 mr-2" />
                    <span className="text-sm">Free parking for tour participants</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Live Chat Section */}
            {activeTab === 'chat' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-6">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Live Chat Support</h3>
                  <p className="text-gray-600">Get instant answers from our support team.</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="font-semibold text-gray-800">Online Now</span>
                    </div>
                    <p className="text-gray-600 mb-4">Our chat support is currently available. Average wait time: 2 minutes</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg font-bold"
                    >
                      Start Chat Now
                    </motion.button>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-3">Chat Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weekdays</span>
                        <span className="font-semibold">8:00 AM - 10:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weekends</span>
                        <span className="font-semibold">10:00 AM - 6:00 PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Prefer email? We respond within 24 hours.</p>
                  <button className="text-blue-600 font-semibold flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email Instead
                  </button>
                </div>
              </motion.div>
            )}

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-bold text-lg">Quick Email</div>
                    <div className="text-sm opacity-90">info@eduverse.edu</div>
                  </div>
                </div>
                <div className="text-sm opacity-75">Click to compose email</div>
              </motion.a>

              <motion.a
                href="tel:+15551234567"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-bold text-lg">Direct Call</div>
                    <div className="text-sm opacity-90">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="text-sm opacity-75">Click to call now</div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Departments & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Departments Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Specific Departments</h3>
              <div className="space-y-6">
                {departments.map((dept) => (
                  <motion.div
                    key={dept.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 bg-gradient-to-br ${dept.color} rounded-xl mr-4`}>
                          <div className="text-white">
                            {dept.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{dept.title}</h4>
                          <p className="text-gray-600">{dept.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Mail className="w-4 h-4 mr-2" />
                          <span className="text-sm">Email</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="font-mono text-sm">{dept.email}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyToClipboard(dept.email, `email-${dept.id}`)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Copy className="w-4 h-4 text-gray-500" />
                          </motion.button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Phone className="w-4 h-4 mr-2" />
                          <span className="text-sm">Phone</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="font-mono text-sm">{dept.phone}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyToClipboard(dept.phone, `phone-${dept.id}`)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Copy className="w-4 h-4 text-gray-500" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {dept.hours}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {dept.team}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-start">
                      <HelpCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.platform}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${social.color} rounded-xl p-4 text-white text-center shadow-lg`}
                  >
                    <div className="flex justify-center mb-2">
                      {social.icon}
                    </div>
                    <div className="text-xs font-semibold">{social.platform}</div>
                    <div className="text-xs opacity-75 mt-1">{social.handle}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copy Success Toast */}
            <AnimatePresence>
              {copySuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Visit Our Campus</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-300 mr-3" />
                  <div>
                    <div className="font-semibold">Main Campus Address</div>
                    <div className="text-gray-300">123 Education Boulevard, Knowledge City, KC 12345</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-300 mr-3" />
                  <div>
                    <div className="font-semibold">Visitor Hours</div>
                    <div className="text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-300 mr-3" />
                  <div>
                    <div className="font-semibold">Visitor Information</div>
                    <div className="text-gray-300">+1 (555) 123-4567 ext. 100</div>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get Directions
              </motion.button>
            </div>
            <div className="h-64 lg:h-auto bg-gradient-to-r from-blue-400 to-cyan-300 relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-white/50 mx-auto mb-4" />
                  <div className="text-white font-semibold">Interactive Map</div>
                  <div className="text-white/70 text-sm">Location of EduVerse University</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;