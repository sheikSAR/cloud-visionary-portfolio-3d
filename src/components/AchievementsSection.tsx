
import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'AWS Solutions Architect',
      subtitle: 'Professional',
      icon: '🏆',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Alibaba Cloud MVP',
      subtitle: 'Most Valuable Professional',
      icon: '🌟',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Microsoft Certified',
      subtitle: 'Data Engineer',
      icon: '📊',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      title: 'PRINCE2® Practitioner',
      subtitle: 'Project Management',
      icon: '📋',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'ITIL Certified',
      subtitle: 'Service Management',
      icon: '⚙️',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'German Language',
      subtitle: 'Goethe Institut',
      icon: '🇩🇪',
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements & Certifications
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl mb-4 mx-auto`}>
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {achievement.title}
              </h3>
              <p className="text-blue-200 text-center">
                {achievement.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
