import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Palette, Music, Calendar, Camera, MapPin, Globe, Menu, X, Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  language: 'en' | 'am';
  setLanguage: (lang: 'en' | 'am') => void;
  pages: string[];
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  setCurrentPage, 
  language, 
  setLanguage, 
  pages 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', icon: Home, label: { en: 'Home', am: 'ዋና' } },
    { id: 'art-wall', icon: Palette, label: { en: 'Art Wall', am: 'የጥበብ ግድግዳ' } },
    { id: 'events', icon: Music, label: { en: 'Events', am: 'ክስተቶች' } },
    { id: 'menu', icon: Coffee, label: { en: 'Menu', am: 'ምናሌ' } },
    { id: 'gallery', icon: Camera, label: { en: 'Gallery', am: 'ማዕከለ ስዕል' } },
    { id: 'reserve', icon: Calendar, label: { en: 'Reserve', am: 'ማስያዝ' } },
    { id: 'contact', icon: MapPin, label: { en: 'Contact', am: 'ያግኙን' } },
  ];

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handlePageChange('hero')}
            >
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-electric-cyan" />
              <span className="text-lg sm:text-xl font-graffiti neon-text">
                <span className="text-electric-cyan">ቀን</span>{' '}
                <span className="text-neon-magenta">CAFÉ</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-electric-cyan bg-electric-cyan/10 border border-electric-cyan/30' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className={`text-sm ${language === 'am' ? 'font-amharic' : ''}`}>
                      {item.label[language]}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-cyan"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button & Language Toggle */}
            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <motion.button
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'አማ' : 'EN'}
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[90vw] glass border-l border-white/20"
            >
              <div className="p-6 pt-20">
                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handlePageChange(item.id)}
                        className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-electric-cyan/20 to-neon-magenta/20 border border-electric-cyan/30' 
                            : 'hover:bg-white/10'
                        }`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className={`w-6 h-6 ${isActive ? 'text-electric-cyan' : 'text-gray-300'}`} />
                        <span className={`text-lg font-medium ${isActive ? 'text-white' : 'text-gray-300'} ${language === 'am' ? 'font-amharic' : ''}`}>
                          {item.label[language]}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;