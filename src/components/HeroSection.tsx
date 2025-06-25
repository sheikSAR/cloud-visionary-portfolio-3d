
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import ReactCountryFlag from "react-country-flag";
import CloudParticles from './CloudParticles';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <CloudParticles />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Maheswarakumar
          </h1>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Cloud Visionary | Data Engineering Specialist | Global Tech Educator
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            "Transforming Cloud Vision into Reality"
          </motion.p>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <ReactCountryFlag countryCode="DE" svg style={{ width: '2em', height: '2em' }} title="Germany" />
          <ReactCountryFlag countryCode="DK" svg style={{ width: '2em', height: '2em' }} title="Denmark" />
          <ReactCountryFlag countryCode="CH" svg style={{ width: '2em', height: '2em' }} title="Switzerland" />
          <ReactCountryFlag countryCode="US" svg style={{ width: '2em', height: '2em' }} title="USA" />
          <ReactCountryFlag countryCode="IN" svg style={{ width: '2em', height: '2em' }} title="India" />
          <ReactCountryFlag countryCode="IT" svg style={{ width: '2em', height: '2em' }} title="Italy" />
          <ReactCountryFlag countryCode="SA" svg style={{ width: '2em', height: '2em' }} title="Saudi Arabia" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
