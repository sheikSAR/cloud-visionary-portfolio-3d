
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsCloud = () => {
  const skills = [
    { name: 'AWS', level: 'Expert', color: 'from-orange-400 to-orange-600' },
    { name: 'Alibaba Cloud', level: 'MVP', color: 'from-blue-400 to-blue-600' },
    { name: 'Microsoft Azure', level: 'Certified', color: 'from-cyan-400 to-cyan-600' },
    { name: 'DevOps', level: 'Expert', color: 'from-green-400 to-green-600' },
    { name: 'Jenkins', level: 'Advanced', color: 'from-red-400 to-red-600' },
    { name: 'Unix', level: 'Expert', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Java', level: 'Certified', color: 'from-purple-400 to-purple-600' },
    { name: 'Data Engineering', level: 'Specialist', color: 'from-pink-400 to-pink-600' },
    { name: 'Informatica', level: 'Expert', color: 'from-indigo-400 to-indigo-600' },
    { name: 'SAP BODS', level: 'Advanced', color: 'from-teal-400 to-teal-600' },
    { name: 'PRINCE2®', level: 'Practitioner', color: 'from-rose-400 to-rose-600' },
    { name: 'ITIL', level: 'Certified', color: 'from-emerald-400 to-emerald-600' },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

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
          Skills & Expertise
        </motion.h2>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`relative cursor-pointer`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} text-white font-semibold shadow-lg backdrop-blur-lg border border-white/20`}>
                  <span className="text-sm">{skill.name}</span>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {skill.level}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;
