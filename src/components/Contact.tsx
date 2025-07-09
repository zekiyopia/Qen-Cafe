import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Coffee } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'am';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Find us in the heart of Addis Ababa's creative district",
      address: "Bole Road, Near Megenagna\nAddis Ababa, Ethiopia",
      hours: {
        title: "Opening Hours",
        weekdays: "Mon - Thu: 7:00 AM - 11:00 PM",
        weekends: "Fri - Sun: 7:00 AM - 2:00 AM"
      },
      social: {
        title: "Follow Our Journey",
        instagram: "Follow on Instagram",
        telegram: "Join Telegram",
        call: "Call Us"
      }
    },
    am: {
      title: "ያግኙን",
      subtitle: "በአዲስ አበባ ፈጣሪ አካባቢ ልብ ይፈልጉን",
      address: "ቦሌ መንገድ, በመገናኛ አቅራቢያ\nአዲስ አበባ, ኢትዮጵያ",
      hours: {
        title: "የመክፈቻ ሰዓቶች",
        weekdays: "ሰኞ - ሐሙስ: 7:00 ጠዋት - 11:00 ምሽት",
        weekends: "አርብ - እሁድ: 7:00 ጠዋት - 2:00 አኩሌ"
      },
      social: {
        title: "ጉዞአችንን ተከተሉ",
        instagram: "በኢንስታግራም ተከተሉ",
        telegram: "ቴሌግራም ቻናል",
        call: "ይደውሉ"
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "+251 911 123 456",
      description: "Call or WhatsApp",
      action: "tel:+251911123456"
    },
    {
      icon: Mail,
      title: "hello@qencafe.et",
      description: "Send us an email",
      action: "mailto:hello@qencafe.et"
    },
    {
      icon: MapPin,
      title: content[language].address,
      description: "Visit our location",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      title: content[language].social.instagram,
      handle: "@qencafe_addis",
      color: "from-pink-500 to-purple-500",
      action: "https://instagram.com/qencafe_addis"
    },
    {
      icon: MessageCircle,
      title: content[language].social.telegram,
      handle: "t.me/qencafe",
      color: "from-blue-500 to-cyan-500",
      action: "https://t.me/qencafe"
    },
    {
      icon: Coffee,
      title: "Qen Café Official",
      handle: "Follow our updates",
      color: "from-orange-500 to-red-500",
      action: "#"
    }
  ];

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-deep-violet/30 to-graphite flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-graffiti neon-text mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
            {content[language].title}
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 ${language === 'am' ? 'font-amharic' : ''}`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.action}
                    className="group block"
                    initial={{ rotateY: -45, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: 5,
                      z: 20
                    }}
                  >
                    <div className="glass rounded-xl p-4 sm:p-6 transform-3d hover-3d perspective-1000">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-electric-cyan to-neon-magenta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-electric-cyan transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                        </div>
                      </div>

                      {/* 3D Shadow Effect */}
                      <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Opening Hours */}
            <motion.div
              className="glass rounded-xl p-4 sm:p-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-electric-cyan" />
                <h3 className={`text-lg sm:text-xl font-bold ${language === 'am' ? 'font-amharic' : ''}`}>
                  {content[language].hours.title}
                </h3>
              </div>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p className={language === 'am' ? 'font-amharic' : ''}>
                  {content[language].hours.weekdays}
                </p>
                <p className={language === 'am' ? 'font-amharic' : ''}>
                  {content[language].hours.weekends}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Map & Social */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Interactive Map Placeholder */}
            <motion.div
              className="relative h-48 sm:h-64 glass rounded-xl overflow-hidden group perspective-1000"
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                z: 20
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 to-neon-magenta/20 transform-3d hover-3d">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-electric-cyan mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Interactive Map</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Click to get directions</p>
                  </div>
                </div>
              </div>
              
              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-3 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Social Media Links */}
            <div>
              <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
                {content[language].social.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.action}
                      className="group block"
                      initial={{ rotateY: 45, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.8,
                        delay: index * 0.1 + 0.7,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        rotateY: -5,
                        rotateX: 5,
                        z: 20
                      }}
                    >
                      <div className="glass rounded-xl p-3 sm:p-4 transform-3d hover-3d perspective-1000">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-electric-cyan transition-colors duration-300">
                              {social.title}
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm">{social.handle}</p>
                          </div>
                        </div>

                        {/* 3D Shadow Effect */}
                        <div className="absolute inset-0 bg-neon-magenta/10 rounded-xl transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            © 2025 Qen Café & Lounge. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-2 text-electric-cyan">
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-graffiti text-base sm:text-lg">
              Made with ♥ in Addis Ababa
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;