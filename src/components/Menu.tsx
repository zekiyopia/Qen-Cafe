import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Wine, Leaf, Star, Plus } from 'lucide-react';

interface MenuProps {
  language: 'en' | 'am';
  setCurrentPage?: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ language, setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const content = {
    en: {
      title: "Interactive Menu",
      subtitle: "A fusion of Ethiopian tradition and modern innovation",
      orderNow: "Order Now"
    },
    am: {
      title: "የተደራጀ ምናሌ",
      subtitle: "የኢትዮጵያ ባህል እና ዘመናዊ አዳዲስ ነገሮች ውህደት",
      orderNow: "አሁን አዝዙ"
    }
  };

  const categories = [
    { id: 'coffee', icon: Coffee, label: { en: 'Coffee', am: 'ቡና' } },
    { id: 'brunch', icon: Utensils, label: { en: 'Brunch', am: 'ቁርስ' } },
    { id: 'mixology', icon: Wine, label: { en: 'Mixology', am: 'ማጥባቂያ' } },
    { id: 'vegan', icon: Leaf, label: { en: 'Vegan', am: 'ቬጋን' } }
  ];

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: "Qen Signature Blend",
        nameAm: "ቀን ሲግኔቸር ቡና",
        description: "Ethiopian highland beans with notes of chocolate and citrus",
        descriptionAm: "የአስመራ ከፍታ ቡና በቸኮሌት እና ሎሚ ጣዕም",
        price: "45 ETB",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.9,
        popular: true
      },
      {
        id: 2,
        name: "Neon Cold Brew",
        nameAm: "ኒዮን ቀዝቃዛ ቡና",
        description: "Electric blue cold brew with butterfly pea flowers",
        descriptionAm: "በቢተር ፒ አበባ የተሠራ ኤሌክትሪክ ሰማያዊ ቀዝቃዛ ቡና",
        price: "50 ETB",
        image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7
      },
      {
        id: 3,
        name: "Artistic Affogato",
        nameAm: "አርቲስቲክ አፎጋቶ",
        description: "Vanilla ice cream drowned in espresso art",
        descriptionAm: "በኤስፕሬሶ ጥበብ የተሸፈነ ቫኒላ አይስክሬም",
        price: "55 ETB",
        image: "https://images.pexels.com/photos/1233528/pexels-photo-1233528.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8
      }
    ],
    brunch: [
      {
        id: 4,
        name: "Urban Shakla Shiro",
        nameAm: "የከተማ ሻክላ ሽሮ",
        description: "Modern twist on traditional shiro with avocado toast",
        descriptionAm: "ከአቮካዶ ቶስት ጋር የባህላዊ ሽሮ ዘመናዊ ክንክ",
        price: "120 ETB",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.6,
        popular: true
      },
      {
        id: 5,
        name: "Graffiti Pancakes",
        nameAm: "ግራፊቲ ፓንኬክ",
        description: "Colorful pancakes with edible art designs",
        descriptionAm: "በምግብ ጥበብ የተቀመሙ ቀለማት ፓንኬክ",
        price: "85 ETB",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.5
      }
    ],
    mixology: [
      {
        id: 6,
        name: "Electric Cyber Mojito",
        nameAm: "ኤሌክትሪክ ሳይበር ሞጂቶ",
        description: "Glowing cocktail with LED ice cubes and mint",
        descriptionAm: "በኤልኢዲ በረዶ እና ናናጥበር የሚያብራ ኮክቴል",
        price: "180 ETB",
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.9,
        popular: true
      },
      {
        id: 7,
        name: "Addis Sunset",
        nameAm: "የአዲስ አበባ ምሽት",
        description: "Layered cocktail representing Addis skyline",
        descriptionAm: "የአዲስ አበባን ሰማይ የሚወክል የተደራጀ ኮክቴል",
        price: "160 ETB",
        image: "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7
      }
    ],
    vegan: [
      {
        id: 8,
        name: "Plant-based Beyaynetu",
        nameAm: "ተክል-መሰረታዊ በያይነቱ",
        description: "Modern vegan interpretation of traditional platter",
        descriptionAm: "የባህላዊ ሳህን ዘመናዊ ቬጋን ትርጓሜ",
        price: "140 ETB",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8,
        popular: true
      }
    ]
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 concrete-texture flex items-center">
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

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-electric-cyan to-neon-magenta text-black' 
                    : 'glass text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`flex items-center space-x-2 text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{category.label[language]}</span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-electric-cyan to-neon-magenta rounded-full -z-10"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.id}
                className="group perspective-1000"
                initial={{ 
                  opacity: 0, 
                  rotateY: -90,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1, 
                  rotateY: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 5,
                  z: 50
                }}
              >
                <div className="glass rounded-xl overflow-hidden transform-3d hover-3d h-full">
                  {/* Item Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={language === 'am' ? item.nameAm : item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-2 sm:px-3 py-1 bg-neon-orange text-black text-xs sm:text-sm font-bold rounded-full flex items-center space-x-1">
                          <Star className="w-2 h-2 sm:w-3 sm:h-3" />
                          <span>Popular</span>
                        </span>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center space-x-1 text-yellow-400 text-xs sm:text-sm">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <span className="text-white">{item.rating}</span>
                    </div>

                    {/* Add Button */}
                    <motion.button
                      className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-electric-cyan rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </motion.button>
                  </div>

                  {/* Item Details */}
                  <div className="p-4 sm:p-6">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {language === 'am' ? item.nameAm : item.name}
                    </h3>
                    
                    <p className={`text-gray-300 text-xs sm:text-sm mb-4 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {language === 'am' ? item.descriptionAm : item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-electric-cyan">
                        {item.price}
                      </span>
                      <motion.button
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-neon-magenta to-electric-cyan rounded-full font-bold text-black text-xs sm:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={language === 'am' ? 'font-amharic' : ''}>
                          {content[language].orderNow}
                        </span>
                      </motion.button>
                    </div>
                  </div>

                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-3 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Order Now Button */}
        {setCurrentPage && (
          <div className="mt-8 text-center">
            <button
              className="mt-8 px-6 py-3 rounded bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
              onClick={() => setCurrentPage('order-now')}
            >
              {language === 'am' ? 'አሁን ይትዘዙ' : 'Order Now'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;