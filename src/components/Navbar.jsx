import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Home, 
  GraduationCap, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Phone,
  School
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with icons
  const navItems = [
    { name: 'Home', icon: <Home size={18} />, href: '#' },
    { name: 'About', icon: <Users size={18} />, href: '#About' },
    { 
      name: 'Programs', 
      icon: <BookOpen size={18} />, 
      href: '#Programs',
      dropdown: [
        'Undergraduate Programs',
        'Graduate Programs',
        'Online Learning',
        'Professional Certificates'
      ]
    },
    { 
      name: 'Admissions', 
      icon: <GraduationCap size={18} />, 
      href: '#Admissions',
      dropdown: [
        'Apply Now',
        'Requirements',
        'Financial Aid',
        'Campus Tour'
      ]
    },
    { name: 'Testimonials', icon: <MessageSquare size={18} />, href: '#Testimonials' },
    { name: 'Contact', icon: <Phone size={18} />, href: '#Contact' }
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/30 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 bg-blue-600 rounded-lg">
                <School className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Kai<span className="text-blue-600">Lpal</span>
                </h1>
                <p className="text-xs text-gray-600 -mt-1">Hospital and College</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.ul 
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center space-x-6"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={itemVariants}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <span className="text-blue-600">{item.icon}</span>
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown className="transition-transform duration-200 group-hover:rotate-180" size={16} />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 p-2 z-50"
                        >
                          {item.dropdown.map((subItem, index) => (
                            <motion.a
                              key={subItem}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              href="#"
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all duration-200"
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Search Bar */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <AnimatePresence>
                    {searchOpen ? (
                      <motion.div
                        variants={searchVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="relative"
                      >
                        <input
                          type="text"
                          placeholder="Search courses, programs..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          autoFocus
                          onBlur={() => setSearchOpen(false)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                      </motion.div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSearchOpen(true)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Search className="text-gray-600" size={20} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                {/* Apply Now Button */}
                <a href="#Admissions"><motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                >
                  Apply Now
                </motion.button></a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2"
              >
                <Search size={22} />
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden mt-4 overflow-hidden"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses, programs..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-6">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </a>
                      
                      {/* Mobile Dropdown */}
                      {item.dropdown && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => setIsOpen(false)}
                            >
                              • {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.li>
                  ))}
                  
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300">
                      Apply Now
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;