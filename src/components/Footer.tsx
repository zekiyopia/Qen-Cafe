import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Instagram, MessageCircle, Phone, Mail, MapPin, Clock, Wifi, Music } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'am';
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ language, setCurrentPage }) => {
  const content = {
    en: {
      tagline: "Where Coffee Meets Creativity",
      description: "Join us at Addis Ababa's most innovative café and creative lounge",
      quickLinks: "Quick Links",
      contact: "Get In Touch",
      hours: "Opening Hours",
      social: "Follow Us",
      address: "Bole Road, Near Megenagna\nAddis Ababa, Ethiopia",
      phone: "+251 911 123 456",
      email: "hello@qencafe.et",
      weekdays: "Mon - Thu: 7:00 AM - 11:00 PM",
      weekends: "Fri - Sun: 7:00 AM - 2:00 AM",
      copyright: "© 2025 Qen Café & Lounge. All rights reserved.",
      madeWith: "Made with Zeku",
      inAddis: "in Addis Ababa",
      links: {
        home: "Home",
        artWall: "Art Wall",
        events: "Events",
        menu: "Menu",
        gallery: "Gallery",
        reserve: "Reserve",
        contact: "Contact"
      }
    },
    am: {
      tagline: "ቡና እና ፈጠራ የሚገናኙበት ቦታ",
      description: "በአዲስ አበባ በጣም አዳዲስ ካፌ እና የፈጠራ ላውንጅ ይቀላቀሉን",
      quickLinks: "ፈጣን አገናኞች",
      contact: "ያግኙን",
      hours: "የመክፈቻ ሰዓቶች",
      social: "ተከተሉን",
      address: "ቦሌ መንገድ, በመገናኛ አቅራቢያ\nአዲስ አበባ, ኢትዮጵያ",
      phone: "+251 911 123 456",
      email: "hello@qencafe.et",
      weekdays: "ሰኞ - ሐሙስ: 7:00 ጠዋት - 11:00 ምሽት",
      weekends: "አርብ - እሁድ: 7:00 ጠዋት - 2:00 አኩሌ",
      copyright: "© 2025 ቀን ካፌ እና ላውንጅ። ሁሉም መብቶች የተጠበቁ ናቸው።",
      madeWith: "በ",
      inAddis: "አዲስ አበባ ተሠርቷል",
      links: {
        home: "ዋና",
        artWall: "የጥበብ ግድግዳ",
        events: "ክስተቶች",
        menu: "ምናሌ",
        gallery: "ማዕከለ ስዕል",
        reserve: "ማስያዝ",
        contact: "ያግኙን"
      }
    }
  };

  const quickLinks = [
    { id: 'hero', label: content[language].links.home },
    { id: 'art-wall', label: content[language].links.artWall },
    { id: 'events', label: content[language].links.events },
    { id: 'menu', label: content[language].links.menu },
    { id: 'gallery', label: content[language].links.gallery },
    { id: 'reserve', label: content[language].links.reserve },
    { id: 'contact', label: content[language].links.contact }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@qencafe_addis",
      color: "from-pink-500 to-purple-500",
      url: "https://instagram.com/qencafe_addis"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      handle: "t.me/qencafe",
      color: "from-blue-500 to-cyan-500",
      url: "https://t.me/qencafe"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      handle: "+251 911 123 456",
      color: "from-green-500 to-emerald-500",
      url: "tel:+251911123456"
    }
  ];

  const features = [
    { icon: Wifi, label: language === 'en' ? 'Free WiFi' : 'ነፃ ዋይፋይ' },
    { icon: Music, label: language === 'en' ? 'Live Music' : 'ቀጥታ ሙዚቃ' },
    { icon: Coffee, label: language === 'en' ? 'Premium Coffee' : 'ፕሪሚየም ቡና' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-graphite via-deep-violet/20 to-transparent border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-cyan/10 to-neon-magenta/10" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-magenta/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-electric-cyan to-neon-magenta rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Coffee className="w-6 h-6 text-black" />
              </motion.div>
              <div>
                <h3 className="text-xl font-graffiti neon-text">
                  <span className="text-electric-cyan">ቀን</span>{' '}
                  <span className="text-neon-magenta">CAFÉ</span>
                </h3>
              </div>
            </div>
            
            <p className={`text-gray-300 mb-4 text-sm leading-relaxed ${language === 'am' ? 'font-amharic' : ''}`}>
              {content[language].description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1 glass rounded-full text-xs"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-3 h-3 text-electric-cyan" />
                    <span className={language === 'am' ? 'font-amharic' : ''}>{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
              {content[language].quickLinks}
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`block text-gray-300 hover:text-electric-cyan transition-colors text-sm ${language === 'am' ? 'font-amharic' : ''}`}
                  whileHover={{ x: 5 }}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
              {content[language].contact}
            </h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <p className={`text-gray-300 text-sm ${language === 'am' ? 'font-amharic' : ''}`}>
                  {content[language].address}
                </p>
              </motion.div>
              <motion.a
                href={`tel:${content[language].phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-electric-cyan transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm">{content[language].phone}</span>
              </motion.a>
              <motion.a
                href={`mailto:${content[language].email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-electric-cyan transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm">{content[language].email}</span>
              </motion.a>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h5 className={`text-sm font-bold mb-3 flex items-center space-x-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                <Clock className="w-4 h-4 text-neon-magenta" />
                <span>{content[language].hours}</span>
              </h5>
              <div className="space-y-1 text-xs text-gray-300">
                <p className={language === 'am' ? 'font-amharic' : ''}>{content[language].weekdays}</p>
                <p className={language === 'am' ? 'font-amharic' : ''}>{content[language].weekends}</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
              {content[language].social}
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="group flex items-center space-x-3 p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-electric-cyan transition-colors">
                        {social.label}
                      </p>
                      <p className="text-xs text-gray-400">{social.handle}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className={`text-gray-400 text-sm text-center sm:text-left ${language === 'am' ? 'font-amharic' : ''}`}>
              {content[language].copyright}
            </p>
            
            <motion.div
              className="flex items-center space-x-2 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span className={language === 'am' ? 'font-amharic' : ''}>{content[language].madeWith}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
              </motion.div>
              <span className={language === 'am' ? 'font-amharic' : ''}>{content[language].inAddis}</span>
              <Coffee className="w-4 h-4 text-electric-cyan" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-cyan via-neon-magenta to-neon-orange opacity-50" />
    </footer>
  );
};

export default Footer;