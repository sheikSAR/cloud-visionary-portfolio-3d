
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Flag, Youtube } from 'lucide-react';

const CommunitySection = () => {
  const communityWork = [
    {
      title: 'AWS User Group Madurai',
      role: 'Founder & Organizer',
      period: 'Jan 2022 – Present',
      description: 'Leading the local AWS community with workshops and technical sessions',
      icon: Users,
      highlights: [
        'Bilingual AWS EC2 session (English-Tamil) - International Women\'s Day 2022',
        'Deep-dive sessions on AWS QuickSight, Athena & Redshift',
        'Informatica Intelligent Cloud Services (IICS) workshops'
      ]
    },
    {
      title: 'University & Public Workshops',
      role: 'Speaker & Educator',
      period: '2021 – Present',
      description: 'Delivering technical workshops and educational sessions',
      icon: Flag,
      highlights: [
        '"Journey with Alibaba Cloud Computing" at Madurai Kamaraj University',
        'AWS College Champ Workshop (Amazon Q) - Feb 2025',
        'Agentic AI with Google - May 2025'
      ]
    },
    {
      title: 'Hackathons & Community Events',
      role: 'Volunteer & Participant',
      period: '2022 – Present',
      description: 'Active participation in tech community events and hackathons',
      icon: Award,
      highlights: [
        'Volunteer at Madurai Hackathon 2022',
        'Speaker at Cloud and DevOps Seminars',
        'Community contributor across multiple tech events'
      ]
    }
  ];

  const achievements = [
    '🏆 Led first bilingual AWS talk (Tamil + English)',
    '🌍 Worked on cloud consulting in USA, Germany, and India',
    '📢 Speaker at major cloud events and university workshops',
    '🎓 Bridge between enterprise innovation and academic inspiration'
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
          Community & Volunteer Contributions
        </motion.h2>

        {/* Achievement Ribbons */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 border border-white/20"
            >
              <p className="text-white font-medium">{achievement}</p>
            </div>
          ))}
        </motion.div>

        {/* Community Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityWork.map((work, index) => {
            const IconComponent = work.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{work.title}</h3>
                    <p className="text-blue-300 text-sm">{work.role}</p>
                  </div>
                </div>
                
                <p className="text-purple-300 font-medium mb-2">{work.period}</p>
                <p className="text-gray-400 mb-4">{work.description}</p>
                
                <div className="space-y-2">
                  {work.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <blockquote className="text-xl text-blue-200 italic mb-4">
              "From building government-grade IT systems in Washington DC to leading modern cloud transformations, 
              I combine global experience with grassroots tech education. My commitment to inclusive education—seen 
              in bilingual AWS workshops—makes me a bridge between enterprise innovation and academic inspiration."
            </blockquote>
            <p className="text-purple-300 font-semibold">— Maheswarakumar Muthusamy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
