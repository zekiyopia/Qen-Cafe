import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Check, ArrowRight } from 'lucide-react';

interface ReserveProps {
  language: 'en' | 'am';
}

const Reserve: React.FC<ReserveProps> = ({ language }) => {
  const [selectedArea, setSelectedArea] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    area: '',
    special: ''
  });

  const content = {
    en: {
      title: "Reserve Your Table",
      subtitle: "Book your spot in Addis Ababa's most creative space",
      areas: {
        rooftop: "Rooftop",
        neon: "Neon Lounge", 
        art: "Art Corner"
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        date: "Date",
        time: "Time",
        guests: "Number of Guests",
        area: "Preferred Area",
        special: "Special Requests",
        submit: "Reserve Table"
      }
    },
    am: {
      title: "ጠረጴዛዎን ያስተዳድሩ",
      subtitle: "በአዲስ አበባ በጣም ፈጣሪ በሆነ ቦታ ዘርፍዎን ይመዝግቡ",
      areas: {
        rooftop: "ሮፍቶፕ",
        neon: "ኒዮን ላውንጅ",
        art: "የጥበብ ኮርነር"
      },
      form: {
        name: "ሙሉ ስም",
        email: "የኢሜይል አድራሻ",
        phone: "የስልክ ቁጥር",
        date: "ቀን",
        time: "ሰዓት",
        guests: "የእንግዶች ቁጥር",
        area: "የሚወደው አካባቢ",
        special: "ልዩ ጥያቄዎች",
        submit: "ጠረጴዛ ማስያዝ"
      }
    }
  };

  const areas = [
    {
      id: 'rooftop',
      name: content[language].areas.rooftop,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: language === 'en' ? "Open-air rooftop with city views" : "በከተማ እይታ ክፍት ሮፍቶፕ",
      capacity: "4-8 guests"
    },
    {
      id: 'neon',
      name: content[language].areas.neon,
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: language === 'en' ? "Intimate lounge with neon ambiance" : "በኒዮን ሁኔታ ውስጥ የሚያዋሪ ላውንጅ",
      capacity: "2-6 guests"
    },
    {
      id: 'art',
      name: content[language].areas.art,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: language === 'en' ? "Creative corner surrounded by art" : "በጥበብ የተከበበ ፈጣሪ ኮርነር",
      capacity: "2-4 guests"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-graphite to-deep-violet/30 graffiti-bg flex items-center">
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
          {/* Area Selection */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
              Choose Your Space
            </h3>
            
            <div className="space-y-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area.id}
                  className={`group relative perspective-1000 cursor-pointer ${
                    selectedArea === area.id ? 'ring-2 ring-electric-cyan' : ''
                  }`}
                  initial={{ rotateY: -45, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  onClick={() => {
                    setSelectedArea(area.id);
                    setFormData(prev => ({ ...prev, area: area.id }));
                  }}
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    z: 20
                  }}
                >
                  <div className="glass rounded-xl overflow-hidden transform-3d hover-3d">
                    <div className="flex">
                      <div className="w-1/3 h-20 sm:h-24 overflow-hidden">
                        <img
                          src={area.image}
                          alt={area.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 p-3 sm:p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`text-base sm:text-lg font-bold ${language === 'am' ? 'font-amharic' : ''}`}>
                            {area.name}
                          </h4>
                          {selectedArea === area.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-5 h-5 sm:w-6 sm:h-6 bg-electric-cyan rounded-full flex items-center justify-center"
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                            </motion.div>
                          )}
                        </div>
                        <p className={`text-xs sm:text-sm text-gray-300 mb-1 ${language === 'am' ? 'font-amharic' : ''}`}>
                          {area.description}
                        </p>
                        <div className="flex items-center text-xs text-electric-cyan">
                          <Users className="w-3 h-3 mr-1" />
                          <span>{area.capacity}</span>
                        </div>
                      </div>
                    </div>

                    {/* 3D Shadow Effect */}
                    <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-xl p-6 sm:p-8">
              <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${language === 'am' ? 'font-amharic' : ''}`}>
                Reservation Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {content[language].form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {content[language].form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                    {content[language].form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {content[language].form.date}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {content[language].form.time}
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                      {content[language].form.guests}
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all text-sm sm:text-base"
                      required
                    >
                      <option value="">Select</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                    {content[language].form.special}
                  </label>
                  <textarea
                    name="special"
                    value={formData.special}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg focus:ring-2 focus:ring-electric-cyan focus:outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder={language === 'en' ? 'Any special requests or occasions?' : 'ልዩ ጥያቄዎች ወይም አጋጣሚዎች አሉ?'}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-cyan to-neon-magenta rounded-full font-bold text-black hover-3d"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedArea}
                >
                  <span className={`flex items-center justify-center space-x-2 text-sm sm:text-base ${language === 'am' ? 'font-amharic' : ''}`}>
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{content[language].form.submit}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;