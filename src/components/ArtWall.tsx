import React from 'react';
import { motion } from 'framer-motion';
import { Palette, User, Heart, Share2, Eye } from 'lucide-react';

interface ArtWallProps {
  language: 'en' | 'am';
}

const ArtWall: React.FC<ArtWallProps> = ({ language }) => {
  const content = {
    en: {
      title: "Urban Art Wall",
      subtitle: "Discover the vibrant creativity of Addis Ababa's rising artists",
      submitArt: "Submit Your Art",
      featured: "Featured Artists",
      viewAll: "View All Artworks"
    },
    am: {
      title: "የከተማ ጥበብ ግድግዳ",
      subtitle: "የአዲስ አበባ ከሚወጡ ሰዎች የተዳበረ ፈጠራ ይመልከቱ",
      submitArt: "ጥበብዎን ያስገቡ",
      featured: "ተመረጡ ሰዎች",
      viewAll: "ሁሉንም ስራዎች ይመልከቱ"
    }
  };

  const artworks = [
    {
      id: 1,
      title: "Addis Dreams",
      artist: "የሚመች ተስፋሁን",
      image: "https://images.pexels.com/photos/1562477/pexels-photo-1562477.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 124,
      views: 1200
    },
    {
      id: 2,
      title: "Coffee Culture",
      artist: "Dawit Alemayehu",
      image: "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 89,
      views: 890
    },
    {
      id: 3,
      title: "Neon Nights",
      artist: "Sara Bekele",
      image: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 156,
      views: 1500
    },
    {
      id: 4,
      title: "Street Symphony",
      artist: "መሀሙድ አሊ",
      image: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 203,
      views: 2100
    },
    {
      id: 5,
      title: "Digital Ethiopia",
      artist: "Hanan Mohammed",
      image: "https://images.pexels.com/photos/1146066/pexels-photo-1146066.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 178,
      views: 1800
    },
    {
      id: 6,
      title: "Urban Pulse",
      artist: "ናታናኤል ግርማ",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 142,
      views: 1400
    }
  ];

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 graffiti-bg flex items-center">
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
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 ${language === 'am' ? 'font-amharic' : ''}`}>
            {content[language].subtitle}
          </p>
          
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-magenta to-electric-cyan rounded-full font-bold text-black hover-3d"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`flex items-center space-x-2 ${language === 'am' ? 'font-amharic' : ''}`}>
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{content[language].submitArt}</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Featured Artists Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="group relative perspective-1000"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
            >
              <div className="relative transform-3d hover-3d">
                {/* Artwork Image */}
                <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-square">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1">{artwork.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mb-3 flex items-center">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {artwork.artist}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-300">
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {artwork.likes}
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {artwork.views}
                          </span>
                        </div>
                        
                        <motion.button
                          className="p-1.5 sm:p-2 glass rounded-full hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Neon Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-cyan rounded-lg transition-colors duration-300" />
                </div>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-electric-cyan/20 rounded-lg transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 glass border border-neon-magenta/30 rounded-full font-bold text-white hover:bg-neon-magenta/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
              {content[language].viewAll}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtWall;