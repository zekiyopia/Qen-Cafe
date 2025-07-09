import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OrderNowProps {
  language: 'en' | 'am';
}

const orderTexts = {
  en: {
    title: "Order Now",
    subtitle: "Delicious food, just a few clicks away!",
    name: "Full Name",
    phone: "Phone Number",
    order: "Your Order",
    submit: "Place Order",
    success: "Thank you! Your order has been received.",
  },
  am: {
    title: "አሁን ይትዘዙ",
    subtitle: "ጣፋጭ ምግብ በጥቂት እጅግ ቀላል ነው!",
    name: "ሙሉ ስም",
    phone: "ስልክ ቁጥር",
    order: "የትዛዝዎ ዝርዝር",
    submit: "ትዛዝ ያቅርቡ",
    success: "አመሰግናለሁ! ትዛዝዎ ተቀብሏል።",
  }
};

const OrderNow: React.FC<OrderNowProps> = ({ language }) => {
  const [form, setForm] = useState({ name: '', phone: '', order: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const t = orderTexts[language];

  return (
    <motion.div
      className="flex flex-col mt-20 items-center justify-center min-h-[70vh] px-4"
      initial={{ opacity: 0, scale: 0.95, y: 60 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -60 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
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
        className="bg-black/70 rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col gap-5 border border-gradient-to-r from-green-400 to-purple-500"
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
          className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder={t.phone}
          value={form.phone}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="order"
          placeholder={t.order}
          value={form.order}
          onChange={handleChange}
          required
          rows={4}
          className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        />
        <motion.button
          type="submit"
          className="mt-2 py-2 rounded bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
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

export default OrderNow;
