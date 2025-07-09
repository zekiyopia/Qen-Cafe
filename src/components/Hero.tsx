import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, ArrowDown, Play, Palette, ArrowRight, Wifi, Music, Camera, Users, Clock, Heart } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'am';
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ language, setCurrentPage }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [1, 300]);
  const opacity = useTransform(scrollY, [1, 700], [2, 0]);

  const content = {
    en: {
      tagline: "Where Coffee Meets Creativity",
      subtitle: "Experience Addis Ababa's most innovative café and creative lounge",
      cta1: "Explore Art Wall",
      cta2: "Listen to the Lounge",
      explore: "Explore Our World",
      features: {
        title: "Why Choose Qen Café?",
        subtitle: "Discover what makes us special"
      }
    },
    am: {
      tagline: "ቡና እና ፈጠራ የሚገናኙበት ቦታ",
      subtitle: "የአዲስ አበባን በጣም አዳዲስ ካፌ እና የፈጠራ ላውንጅ ይለማመዱ",
      cta1: "የጥበብ ግድግዳን ይመልከቱ",
      cta2: "ላውንጁን ያዳምጡ",
      explore: "ዓለማችንን ይመልከቱ",
      features: {
        title: "ለምን ቀን ካፌን ይመርጣሉ?",
        subtitle: "ልዩ የሚያደርገንን ይወቁ"
      }
    }
  };

  const features = [
    {
      icon: Coffee,
      title: { en: "Premium Coffee", am: "ፕሪሚየም ቡና" },
      description: { en: "Ethically sourced Ethiopian beans", am: "በሥነ ምግባር የተገኘ የኢትዮጵያ ቡና" },
      color: "from-amber-500 to-orange-600",
      delay: 0.1
    },
    {
      icon: Palette,
      title: { en: "Art Gallery", am: "የጥበብ ማዕከል" },
      description: { en: "Local artists showcase", am: "የአካባቢ ሰዎች ማሳያ" },
      color: "from-purple-500 to-pink-600",
      delay: 0.2
    },
    {
      icon: Music,
      title: { en: "Live Music", am: "ቀጥታ ሙዚቃ" },
      description: { en: "Jazz nights & DJ sets", am: "የጃዝ ምሳሌዎች እና ዲጄ ሴቶች" },
      color: "from-blue-500 to-cyan-600",
      delay: 0.3
    },
    {
      icon: Wifi,
      title: { en: "Free WiFi", am: "ነፃ ዋይፋይ" },
      description: { en: "High-speed internet", am: "ከፍተኛ ፍጥነት ኢንተርኔት" },
      color: "from-green-500 to-emerald-600",
      delay: 0.4
    },
    {
      icon: Users,
      title: { en: "Community", am: "ማህበረሰብ" },
      description: { en: "Creative networking space", am: "የፈጠራ ኔትወርክ ቦታ" },
      color: "from-indigo-500 to-purple-600",
      delay: 0.5
    },
    {
      icon: Clock,
      title: { en: "Open Late", am: "ዘግይቶ ክፍት" },
      description: { en: "Until 2 AM on weekends", am: "በሳምንት መጨረሻ እስከ 2 ጠዋት" },
      color: "from-red-500 to-pink-600",
      delay: 0.6
    }
  ];

  const [floatingElements, setFloatingElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      size: Math.random() * 80 + 40,
      color: ['electric-cyan', 'neon-magenta', 'neon-orange'][Math.floor(Math.random() * 3)]
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <motion.section
      style={{ y, opacity }}
      className="relative mt-10 min-h-screen flex flex-col justify-center overflow-hidden concrete-texture px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute rounded-full opacity-10 bg-${element.color}`}
            style={{
              width: element.size,
              height: element.size,
              left: element.x,
              top: element.y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-graffiti neon-text mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px #00ffff",
                "0 0 40px #ff00ff", 
                "0 0 20px #00ffff"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span 
              className="text-electric-cyan block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              ቀን
            </motion.span>
            <motion.span 
              className="text-neon-magenta"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              CAFÉ
            </motion.span>
          </motion.h1>

          <motion.p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 ${language === 'am' ? 'font-amharic' : ''}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {content[language].tagline}
          </motion.p>

          <motion.p
            className={`text-sm sm:text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto px-4 ${language === 'am' ? 'font-amharic' : ''}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {content[language].subtitle}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.button
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-cyan to-neon-magenta rounded-full font-bold text-black overflow-hidden hover-3d"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('art-wall')}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
            <span className="relative flex items-center justify-center space-x-2">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className={`text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
                {content[language].cta1}
              </span>
            </span>
          </motion.button>

          <motion.button
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass border border-electric-cyan/30 rounded-full font-bold text-white hover-3d"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('events')}
          >
            <span className="relative flex items-center justify-center space-x-2">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className={`text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
                {content[language].cta2}
              </span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${language === 'am' ? 'font-amharic' : ''}`}>
            {content[language].features.title}
          </h2>
          <p className={`text-gray-300 text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
            {content[language].features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group perspective-1000"
                initial={{ 
                  y: 50, 
                  opacity: 0,
                  rotateY: -45
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  rotateY: 0
                }}
                transition={{ 
                  delay: 1.5 + feature.delay,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 5,
                  z: 30
                }}
              >
                <div className="glass rounded-xl p-3 sm:p-4 lg:p-6 text-center transform-3d hover-3d h-full">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className={`text-xs sm:text-sm lg:text-base font-bold mb-1 sm:mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                    {feature.title[language]}
                  </h3>
                  <p className={`text-xs sm:text-sm text-gray-300 ${language === 'am' ? 'font-amharic' : ''}`}>
                    {feature.description[language]}
                  </p>

                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Hint */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setCurrentPage('menu')}
            className={`flex items-center space-x-2 text-sm text-gray-400 hover:text-electric-cyan transition-colors ${language === 'am' ? 'font-amharic' : ''}`}
            whileHover={{ scale: 1.05 }}
          >
            <span>{content[language].explore}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-electric-cyan" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite opacity-60" />
    </motion.section>
  );
};

export default Hero;