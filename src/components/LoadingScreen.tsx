import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Palette, Music } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-graphite flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl font-graffiti neon-text mb-4">
            <span className="text-electric-cyan">ቀን</span>{' '}
            <span className="text-neon-magenta">CAFÉ</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-amharic">Where Coffee Meets Creativity</p>
        </motion.div>

        <div className="flex justify-center space-x-8 mb-8">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0
            }}
          >
            <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-electric-cyan" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.3
            }}
          >
            <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-neon-magenta" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.6
            }}
          >
            <Music className="w-6 h-6 sm:w-8 sm:h-8 text-neon-orange" />
          </motion.div>
        </div>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full loading-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-sm text-gray-500"
        >
          Preparing your immersive experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;