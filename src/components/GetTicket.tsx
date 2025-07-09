import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GetTicketProps {
  language: 'en' | 'am';
}

const ticketTexts = {
  en: {
    title: "Get Your Event Ticket",
    subtitle: "Secure your spot at our next event!",
    name: "Full Name",
    email: "Email Address",
    tickets: "Number of Tickets",
    submit: "Get Ticket",
    success: "Thank you! Your ticket has been reserved.",
  },
  am: {
    title: "የክስተት ቲኬትዎን ይያዙ",
    subtitle: "በሚቀጥለው ክስተታችን ቦታዎን ያረጋግጡ!",
    name: "ሙሉ ስም",
    email: "ኢሜይል አድራሻ",
    tickets: "የቲኬት ብዛት",
    submit: "ቲኬት ይያዙ",
    success: "አመሰግናለሁ! ቲኬትዎ ተያዙ።",
  }
};

const GetTicket: React.FC<GetTicketProps> = ({ language }) => {
  const [form, setForm] = useState({ name: '', email: '', tickets: 1 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const t = ticketTexts[language];

  return (
    <motion.div
      className="flex flex-col mt-10 items-center justify-center min-h-[70vh] px-4"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {t.title}
      </motion.h1>
      <motion.p
        className="mb-8 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {t.subtitle}
      </motion.p>
      <motion.form
        className="bg-black/60 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5"
        onSubmit={handleSubmit}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <input
          type="text"
          name="name"
          placeholder={t.name}
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          name="email"
          placeholder={t.email}
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          name="tickets"
          min={1}
          max={10}
          placeholder={t.tickets}
          value={form.tickets}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <motion.button
          type="submit"
          className="mt-2 py-2 rounded bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
          whileTap={{ scale: 0.95 }}
        >
          {t.submit}
        </motion.button>
        {submitted && (
          <motion.div
            className="mt-4 text-green-400 text-center font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {t.success}
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default GetTicket;
