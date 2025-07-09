import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Music, Users, Ticket } from 'lucide-react';

interface EventsProps {
  language: 'en' | 'am';
  setCurrentPage?: (page: string) => void;
}

const Events: React.FC<EventsProps> = ({ language, setCurrentPage }) => {
  const content = {
    en: {
      title: "Events & Music",
      subtitle: "Where Addis nights come alive with beats and creativity",
      upcoming: "Upcoming Events",
      getTickets: "Get Tickets"
    },
    am: {
      title: "ክስተቶች እና ሙዚቃ",
      subtitle: "የአዲስ አበባ ምሳሌዎች በምቶች እና በፈጠራ የሚወዱበት",
      upcoming: "የሚመጡ ክስተቶች",
      getTickets: "ትኬት ይውሰዱ"
    }
  };

  const events = [
    {
      id: 1,
      title: "Jazz & Coffee Night",
      titleAm: "ጃዝ እና ቡና ምሽት",
      date: "2025-02-15",
      time: "8:00 PM",
      location: "Neon Lounge",
      locationAm: "ኒዮን ላውንጅ",
      price: "300 ETB",
      capacity: 80,
      booked: 45,
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Music"
    },
    {
      id: 2,
      title: "Digital Art Workshop",
      titleAm: "የዲጂታል ጥበብ ወርክሾፕ",
      date: "2025-02-20",
      time: "2:00 PM",
      location: "Art Corner",
      locationAm: "የጥበብ ኮርነር",
      price: "Free",
      capacity: 25,
      booked: 18,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Rooftop DJ Set",
      titleAm: "ሮፍቶፕ ዲጄ ሴት",
      date: "2025-02-25",
      time: "9:00 PM",
      location: "Rooftop",
      locationAm: "ሮፍቶፕ",
      price: "500 ETB",
      capacity: 120,
      booked: 89,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Party"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'am' ? 'am-ET' : 'en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-graphite to-deep-violet/20 flex items-center">
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="group perspective-1000"
              initial={{ 
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0,
                rotateY: index % 2 === 0 ? -45 : 45
              }}
              animate={{ 
                x: 0, 
                opacity: 1,
                rotateY: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                rotateY: index % 2 === 0 ? 5 : -5,
                rotateX: 5,
                z: 50
              }}
            >
              <div className="glass rounded-xl overflow-hidden transform-3d hover-3d h-full">
                {/* Event Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={language === 'am' ? event.titleAm : event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-electric-cyan text-black text-xs sm:text-sm font-bold rounded-full">
                      {event.type}
                    </span>
                  </div>

                  {/* Capacity */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 text-white text-xs sm:text-sm">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.booked}/{event.capacity}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 ${language === 'am' ? 'font-amharic' : ''}`}>
                    {language === 'am' ? event.titleAm : event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-gray-300">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-electric-cyan" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-neon-magenta" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-neon-orange" />
                      <span className={language === 'am' ? 'font-amharic' : ''}>
                        {language === 'am' ? event.locationAm : event.location}
                      </span>
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1">
                      <span>Capacity</span>
                      <span>{Math.round((event.booked / event.capacity) * 100)}% Full</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-electric-cyan to-neon-magenta h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(event.booked / event.capacity) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-electric-cyan">
                      {event.price}
                    </span>
                    <motion.button
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-neon-magenta to-electric-cyan rounded-full font-bold text-black text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span  className={`flex items-center space-x-2 ${language === 'am' ? 'font-amharic' : ''}`}>
                        <Ticket className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span >{content[language].getTickets}</span>
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-neon-magenta/10 rounded-xl transform translate-x-3 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Get Ticket Button */}
        {setCurrentPage && (
          <div className="text-center mt-8">
            <button
              className="mt-8 px-6 py-3 rounded bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
              onClick={() => setCurrentPage('get-ticket')}
            >
              {language === 'am' ? 'ቲኬት ይያዙ' : 'Get Ticket'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;