
import React from 'react';
import { motion } from 'framer-motion';

const CareerTimeline = () => {
  const timeline = [
    {
      year: '2024-Present',
      company: 'HCL Technologies',
      role: 'Senior Consultant',
      location: 'Global',
      description: 'Leading cloud transformation initiatives and data engineering projects'
    },
    {
      year: '2020-2024',
      company: 'UST Global',
      role: 'Tech Specialist',
      location: 'USA',
      description: 'Specialized in AWS cloud solutions and DevOps implementation'
    },
    {
      year: '2018-2020',
      company: 'Royal Bank of Scotland',
      role: 'Project Lead',
      location: 'Europe',
      description: 'Led enterprise data migration and cloud adoption projects'
    },
    {
      year: '2015-2018',
      company: 'IBM',
      role: 'Solutions Architect',
      location: 'Germany',
      description: 'Designed and implemented enterprise cloud solutions'
    },
    {
      year: '2012-2015',
      company: 'Technosoft',
      role: 'Senior Developer',
      location: 'USA',
      description: 'Developed scalable applications and data processing systems'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Career Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 transform md:-translate-x-1/2"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10"></div>
              
              {/* Content Card */}
              <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <span className="text-blue-400 font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
                  <h4 className="text-lg text-purple-300">{item.company}</h4>
                  <p className="text-gray-300 text-sm mt-1">{item.location}</p>
                  <p className="text-gray-400 mt-3">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
