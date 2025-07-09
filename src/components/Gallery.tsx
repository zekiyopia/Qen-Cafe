import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Heart, Share2, Download, Filter } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'am';
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const content = {
    en: {
      title: "Visual Gallery",
      subtitle: "Capturing moments of creativity and connection",
      filters: {
        all: "All",
        guests: "Guests",
        vibes: "Vibes", 
        coffee: "Coffee Art",
        interior: "Interior"
      }
    },
    am: {
      title: "የምስል ማዕከል",
      subtitle: "የፈጠራ እና ግንኙነት ጊዜያትን መቅዳት",
      filters: {
        all: "ሁሉም",
        guests: "እንግዶች",
        vibes: "ስሜቶች",
        coffee: "የቡና ጥበብ",
        interior: "ውስጣዊ"
      }
    }
  };

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "vibes",
      likes: 234,
      title: "Jazz Night Atmosphere"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "coffee",
      likes: 189,
      title: "Latte Art Masterpiece"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "guests",
      likes: 156,
      title: "Happy Customers"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "interior",
      likes: 298,
      title: "Neon Lounge Area"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "coffee",
      likes: 176,
      title: "Urban Shakla Shiro"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "vibes",
      likes: 267,
      title: "Rooftop Party Night"
    }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
  const filters = Object.entries(content[language].filters);

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-deep-violet/20 to-graphite flex items-center">
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

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map(([key, label]) => (
            <motion.button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 ${
                filter === key
                  ? 'bg-gradient-to-r from-electric-cyan to-neon-magenta text-black'
                  : 'glass text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`flex items-center space-x-2 text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{label}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative perspective-1000 cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl transform-3d hover-3d">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white mb-1 sm:mb-2">{image.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-white">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{image.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <motion.button
                            className="p-1 sm:p-2 glass rounded-full hover:bg-white/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <Share2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Camera Icon */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-electric-cyan" />
                  </div>

                  {/* Neon Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-cyan rounded-lg sm:rounded-xl transition-colors duration-300" />
                </div>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-electric-cyan/20 rounded-lg sm:rounded-xl transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
              
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images.find(img => img.id === selectedImage)?.src}
                  alt="Gallery image"
                  className="w-full h-full object-contain rounded-xl"
                />
                
                <motion.button
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 glass rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.button>

                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 glass rounded-lg p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {images.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">{images.find(img => img.id === selectedImage)?.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        className="p-2 glass rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.button>
                      <motion.button
                        className="p-2 glass rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;