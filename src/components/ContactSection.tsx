
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Link } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mahesmk77@gmail.com',
      href: 'mailto:mahesmk77@gmail.com'
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
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
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

        {/* BroskiesHub Branding Section */}
        <motion.div
          className="broskieshub-footer mt-16 text-center py-8 relative z-50 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo placeholder - you can replace with actual logo */}
            <motion.div
              className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">BH</span>
            </motion.div>
            
            <div className="text-gray-300 text-sm sm:text-base font-medium text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Developed with{' '}
                <motion.span
                  className="text-blue-400 inline-block"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💙
                </motion.span>{' '}
                by <strong className="text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">BroskiesHub</strong>
              </motion.div>
              <motion.div
                className="text-xs italic text-gray-400 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                We craft human-centric digital experiences and custom cloud-based platforms.
              </motion.div>
            </div>
          </motion.div>

          {/* Website Link */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://broskieshub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="w-5 h-5" />
              broskieshub.com
            </motion.a>
          </motion.div>

          {/* Floating 3D elements */}
          <div className="absolute top-0 left-1/4 opacity-20">
            <motion.span
              className="text-3xl block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ☁️
            </motion.span>
          </div>
          
          <div className="absolute top-0 right-1/4 opacity-20">
            <motion.span
              className="text-2xl block"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              📱
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced WhatsApp Contact Button - moved below branding */}
        <motion.div
          className="contact-action text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://wa.me/message/LZACG2ANOP7PP1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl border-2 border-green-400/30 relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
                y: -2
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating icons */}
              <div className="relative flex items-center gap-3">
                <motion.span
                  className="text-2xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📲
                </motion.span>
                <span className="text-lg font-bold">Contact Us on WhatsApp</span>
                <motion.span
                  className="text-xl"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💬
                </motion.span>
              </div>
            </motion.button>
          </motion.a>
        </motion.div>
        
        <motion.div
          className="mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <p>© 2024 Maheswarakumar Muthusamy. Empowering digital transformation worldwide.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
