import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  X,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const events = [
    { id: "admission", title: "Admissions Open Fall 2024", date: "Jan 15 - Mar 31", type: "important" },
    { id: "openhouse", title: "Campus Open House", date: "Feb 20, 2024", type: "event" },
    { id: "scholarship", title: "Scholarship Deadline", date: "Mar 15, 2024", type: "deadline" },
    { id: "research", title: "Research Symposium", date: "Apr 10, 2024", type: "academic" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);

    const eventTimer = setInterval(() => {
      setCurrentEvent((p) => (p + 1) % events.length);
    }, 4000);

    const handleScroll = () => setIsVisible(window.scrollY <= 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      clearInterval(eventTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [events.length]);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const getEventColor = (type) => {
    switch (type) {
      case "important":
        return "text-red-500";
      case "event":
        return "text-blue-500";
      case "deadline":
        return "text-yellow-500";
      case "academic":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-gradient-to-r from-blue-300 via-blue-700 to-blue-300 text-black overflow-hidden"
        >
          {/* Desktop */}
          <div className="hidden md:block container mx-auto px-4 py-3">
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  123 Education St, Knowledge City
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@kaipalcollege.edu
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Mon–Fri: 8:00 AM – 6:00 PM
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(currentDateTime)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {formatTime(currentDateTime)}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={events[currentEvent].id}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <AlertCircle className={`h-5 w-5 ${getEventColor(events[currentEvent].type)}`} />
                    <div>
                      <p className="text-sm font-medium">{events[currentEvent].title}</p>
                      <p className="text-xs">({events[currentEvent].date})</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-blue-900/80 text-white">
            <div className="container mx-auto px-4 py-2 flex gap-6 overflow-x-auto text-sm">
              {[
                "Admissions 2024",
                "Scholarships",
                "International Students",
                "Online Learning",
                "Research",
                "Career Services",
                "Alumni",
                "News & Events",
              ].map((link) => (
                <a key={link} href="/admissions2024" className="flex items-center gap-1 hover:text-yellow-300">
                  <ChevronRight className="h-3 w-3" />
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopHeader;
