
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white">
                  MK
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <p className="text-lg leading-relaxed mb-4">
                A passionate Cloud Consultant and Data Engineering Specialist with extensive experience across 7 countries including USA, Germany, Italy, France, Switzerland, Denmark, and Saudi Arabia.
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200 text-xl">
                "Empowering digital transformation through cloud-first strategies and data-centric architectures."
              </blockquote>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <h3 className="font-semibold text-blue-400 mb-2">Experience</h3>
                <p className="text-2xl font-bold">15+ Years</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <h3 className="font-semibold text-blue-400 mb-2">Countries</h3>
                <p className="text-2xl font-bold">7 Global</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
