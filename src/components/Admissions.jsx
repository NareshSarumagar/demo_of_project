import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Play,
  Pause,
  Info,
  HelpCircle,
  Bookmark,
  Share2,
  Filter,
  Search,
  Globe,
  CreditCard,
  Shield,
  Lock,
  Unlock,
  Trophy,
  TrendingUp,
  BarChart3,
  Percent
} from 'lucide-react';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    tuition: 12000,
    scholarships: 5000,
    financialAid: 3000
  });
  const [applicationForm, setApplicationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    intake: ''
  });

  // Admission Process Steps
  const processSteps = [
    {
      id: 1,
      title: "Explore Programs",
      description: "Browse 150+ programs and find your perfect match",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      duration: "1-2 Weeks",
      actions: ["Program Research", "Virtual Tours", "Advisor Consultation"]
    },
    {
      id: 2,
      title: "Check Requirements",
      description: "Review admission criteria and prepare documents",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-400",
      duration: "2-3 Weeks",
      actions: ["Transcripts", "Test Scores", "Recommendation Letters"]
    },
    {
      id: 3,
      title: "Submit Application",
      description: "Complete online application with required documents",
      icon: <Upload className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      duration: "1 Week",
      actions: ["Online Form", "Document Upload", "Application Fee"]
    },
    {
      id: 4,
      title: "Interview & Review",
      description: "Participate in interviews and await decision",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-400",
      duration: "3-4 Weeks",
      actions: ["Virtual Interview", "Portfolio Review", "Decision Review"]
    },
    {
      id: 5,
      title: "Accept Offer",
      description: "Confirm your spot and begin enrollment",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-400",
      duration: "1 Week",
      actions: ["Offer Acceptance", "Deposit Payment", "Course Registration"]
    }
  ];

  // Program Options
  const programs = [
    {
      id: 1,
      title: "Undergraduate",
      description: "Bachelor's degree programs",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-500",
      deadlines: ["Fall: Aug 15", "Spring: Dec 15"],
      requirements: ["High School Diploma", "Transcripts", "SAT/ACT"],
      fee: "$75"
    },
    {
      id: 2,
      title: "Graduate",
      description: "Master's and PhD programs",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-purple-600 to-pink-500",
      deadlines: ["Fall: Jun 30", "Spring: Nov 30"],
      requirements: ["Bachelor's Degree", "GRE/GMAT", "Letters of Rec"],
      fee: "$100"
    },
    {
      id: 3,
      title: "International",
      description: "Programs for international students",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-600 to-emerald-500",
      deadlines: ["Fall: Jul 1", "Spring: Dec 1"],
      requirements: ["Visa Documents", "TOEFL/IELTS", "Credential Eval"],
      fee: "$125"
    },
    {
      id: 4,
      title: "Online",
      description: "Flexible online programs",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-600 to-yellow-500",
      deadlines: ["Rolling Admission"],
      requirements: ["Technology Setup", "Self-Discipline"],
      fee: "$50"
    }
  ];

  // Scholarships
  const scholarships = [
    {
      id: 1,
      title: "Merit Scholarship",
      amount: "$10,000",
      description: "Based on academic excellence",
      deadline: "Mar 15, 2024",
      eligibility: "GPA 3.8+",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-400"
    },
    {
      id: 2,
      title: "Need-Based Aid",
      amount: "$15,000",
      description: "Financial assistance program",
      deadline: "Apr 30, 2024",
      eligibility: "Income-based",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 3,
      title: "Sports Scholarship",
      amount: "$8,000",
      description: "Athletic achievement award",
      deadline: "May 15, 2024",
      eligibility: "Athletic excellence",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-500 to-pink-400"
    },
    {
      id: 4,
      title: "Research Grant",
      amount: "$12,000",
      description: "For research-focused students",
      deadline: "Jun 1, 2024",
      eligibility: "Research proposal",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-400"
    }
  ];

  // Tabs
  const tabs = [
    { id: 'process', name: 'Admission Process', icon: <Target /> },
    { id: 'requirements', name: 'Requirements', icon: <FileText /> },
    { id: 'scholarships', name: 'Scholarships', icon: <DollarSign /> },
    { id: 'apply', name: 'Apply Now', icon: <CheckCircle /> }
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

  const calculateTotal = () => {
    const total = calculatorValues.tuition - calculatorValues.scholarships - calculatorValues.financialAid;
    return Math.max(0, total);
  };

  const handleInputChange = (field, value) => {
    setApplicationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="Admissions" className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-b from-green-200 to-blue-200">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDAgNjAgTCA2MCA2MCBMIDYwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNzRmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
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
            <span className="text-white text-sm font-semibold">ADMISSIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Start Your Journey
            </span>
            <br />
            <span className="text-gray-800">With Confidence</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join our community of 25,000+ students. Your future begins here with simple, transparent admissions.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: "95%", label: "Acceptance Rate", icon: <Percent className="w-6 h-6" />, color: "bg-green-100 text-green-600" },
            { number: "48H", label: "Quick Response", icon: <Clock className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
            { number: "$15M", label: "Scholarships Awarded", icon: <DollarSign className="w-6 h-6" />, color: "bg-yellow-100 text-yellow-600" },
            { number: "50+", label: "Countries Represented", icon: <Globe className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-lg ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all ${
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
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Admission Process Tab */}
          {activeTab === 'process' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Process Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 transform -translate-x-1/2"></div>
                
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className={`flex flex-col lg:flex-row items-center mb-12 lg:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                      >
                        <div className="flex items-center mb-6">
                          <div className={`p-4 bg-gradient-to-br ${step.color} rounded-xl mr-4`}>
                            <div className="text-white">
                              {step.icon}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Step {step.id}</div>
                            <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{step.description}</p>
                        
                        <div className="flex items-center text-gray-500 mb-4">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">Average duration: {step.duration}</span>
                        </div>
                        
                        <div className="space-y-2">
                          {step.actions.map((action, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {action}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative my-8 lg:my-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-white font-bold text-xl">{step.id}</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="lg:w-1/2"></div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('apply')}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Start Your Application
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Program Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((program) => (
                  <motion.div
                    key={program.id}
                    variants={cardVariants}
                    whileHover="hover"
                    onClick={() => setSelectedProgram(program)}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-gray-100"
                  >
                    <div className={`bg-gradient-to-r ${program.color} p-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <div className="text-white">
                            {program.icon}
                          </div>
                        </div>
                        <div className="text-white font-bold text-lg">{program.fee}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                      <p className="text-white/80">{program.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-bold text-gray-800 mb-3">Application Deadlines</h4>
                      <div className="space-y-2 mb-6">
                        {program.deadlines.map((deadline, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {deadline}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-semibold">
                        View Requirements
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Important Dates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Admission Dates 2024</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Early Decision", date: "Jan 15", status: "Closed" },
                    { title: "Regular Decision", date: "Mar 1", status: "Open" },
                    { title: "Scholarship Deadline", date: "Apr 15", status: "Upcoming" },
                    { title: "Fall Semester Start", date: "Sep 3", status: "Future" }
                  ].map((date, index) => (
                    <div key={index} className="bg-white rounded-xl p-6">
                      <div className="text-sm text-gray-500 mb-2">{date.title}</div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">{date.date}</div>
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                        date.status === 'Open' ? 'bg-green-100 text-green-600' :
                        date.status === 'Closed' ? 'bg-red-100 text-red-600' :
                        date.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {date.status}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Scholarships Tab */}
          {activeTab === 'scholarships' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Scholarships Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {scholarships.map((scholarship) => (
                  <motion.div
                    key={scholarship.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-br ${scholarship.color} rounded-2xl p-6 text-white shadow-xl`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-white/80 text-sm mb-2">Scholarship</div>
                        <h3 className="text-2xl font-bold mb-2">{scholarship.title}</h3>
                        <div className="text-3xl font-bold">{scholarship.amount}</div>
                      </div>
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        {scholarship.icon}
                      </div>
                    </div>
                    
                    <p className="text-white/90 mb-6">{scholarship.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-white/80 mb-1">Deadline</div>
                        <div className="font-semibold">{scholarship.deadline}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/80 mb-1">Eligibility</div>
                        <div className="font-semibold">{scholarship.eligibility}</div>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 bg-white text-gray-800 py-3 rounded-xl font-bold"
                    >
                      Apply Now
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Cost Calculator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Tuition Cost Calculator</h3>
                    <p className="text-gray-600">Estimate your net cost after scholarships and aid</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCalculator(!showCalculator)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold"
                  >
                    {showCalculator ? 'Hide Calculator' : 'Show Calculator'}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {showCalculator && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6">
                        {[
                          { label: "Annual Tuition", value: "tuition", icon: <DollarSign />, color: "blue" },
                          { label: "Scholarships", value: "scholarships", icon: <Award />, color: "green" },
                          { label: "Financial Aid", value: "financialAid", icon: <Shield />, color: "purple" }
                        ].map((item) => (
                          <div key={item.value}>
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center text-gray-700">
                                <div className={`p-2 bg-${item.color}-100 rounded-lg mr-3`}>
                                  <div className={`text-${item.color}-600`}>
                                    {item.icon}
                                  </div>
                                </div>
                                <span className="font-semibold">{item.label}</span>
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                ${calculatorValues[item.value].toLocaleString()}
                              </div>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max={item.value === 'tuition' ? "50000" : "20000"}
                              value={calculatorValues[item.value]}
                              onChange={(e) => setCalculatorValues(prev => ({
                                ...prev,
                                [item.value]: parseInt(e.target.value)
                              }))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                        ))}

                        {/* Total Calculation */}
                        <div className="pt-6 border-t">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-gray-600 mb-1">Estimated Net Cost</div>
                              <div className="text-4xl font-bold text-gray-800">
                                ${calculateTotal().toLocaleString()}
                              </div>
                              <div className="text-green-600 font-semibold mt-2">
                                Save ${(calculatorValues.scholarships + calculatorValues.financialAid).toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-600 mb-1">Per Year</div>
                              <div className="text-sm text-gray-500">Based on your inputs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Progress Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                  <div className="flex items-center justify-between text-white mb-4">
                    <h3 className="text-2xl font-bold">Start Your Application</h3>
                    <div className="text-sm">Step 1 of 4</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-1/4"></div>
                  </div>
                </div>

                {/* Application Form */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={applicationForm.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={applicationForm.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={applicationForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Program of Interest
                      </label>
                      <select
                        value={applicationForm.program}
                        onChange={(e) => handleInputChange('program', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a program</option>
                        {programs.map(program => (
                          <option key={program.id} value={program.title}>{program.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Intake Term
                      </label>
                      <select
                        value={applicationForm.intake}
                        onChange={(e) => handleInputChange('intake', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select intake term</option>
                        <option value="fall2024">Fall 2024</option>
                        <option value="spring2025">Spring 2025</option>
                        <option value="fall2025">Fall 2025</option>
                      </select>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-8">
                    <div className="flex items-start mb-4">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="terms" className="text-gray-600">
                        I agree to the Terms of Service and Privacy Policy. I understand that submitting this form does not guarantee admission.
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="communications"
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="communications" className="text-gray-600">
                        I agree to receive communications about admissions, events, and updates from the university.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50"
                    >
                      Save & Continue Later
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: "Application FAQ",
                    description: "Common questions answered",
                    icon: <HelpCircle className="w-8 h-8" />,
                    action: "View FAQ"
                  },
                  {
                    title: "Document Checklist",
                    description: "Required documents list",
                    icon: <FileText className="w-8 h-8" />,
                    action: "Download"
                  },
                  {
                    title: "Contact Admissions",
                    description: "Get personalized help",
                    icon: <Phone className="w-8 h-8" />,
                    action: "Call Now"
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg inline-block mb-4">
                      {resource.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h4>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <button className="text-blue-600 font-semibold flex items-center">
                      {resource.action}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              <div className={`bg-gradient-to-r ${selectedProgram.color} p-8`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mr-4">
                      <div className="text-white">
                        {selectedProgram.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedProgram.title}</h2>
                      <p className="text-white/80">{selectedProgram.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {selectedProgram.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h3>
                    <div className="space-y-4">
                      {selectedProgram.deadlines.map((deadline, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                            <span className="text-gray-700">{deadline.split(':')[0]}</span>
                          </div>
                          <span className="font-semibold text-gray-800">{deadline.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedProgram(null);
                      setActiveTab('apply');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Admissions;