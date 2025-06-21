
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Link } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muthukumarusa@gmail.com',
      href: 'mailto:muthukumarusa@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9710609483',
      href: 'tel:+919710609483'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/maheswarakumar'
    },
    {
      icon: Link,
      label: 'Portfolio',
      value: 'linktr.ee/maheswarakumar',
      href: 'https://linktr.ee/maheswarakumar'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to transform your cloud journey? Let's discuss how we can innovate together.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 block group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
              <p className="text-gray-300">{contact.value}</p>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© 2024 Maheswarakumar Muthusamy. Empowering digital transformation worldwide.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
