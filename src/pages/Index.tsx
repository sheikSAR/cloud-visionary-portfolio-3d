
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsCloud from '../components/SkillsCloud';
import AchievementsSection from '../components/AchievementsSection';
import CareerTimeline from '../components/CareerTimeline';
import CommunitySection from '../components/CommunitySection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <HeroSection />
      <AboutSection />
      <SkillsCloud />
      <AchievementsSection />
      <CareerTimeline />
      <CommunitySection />
      <ContactSection />
    </div>
  );
};

export default Index;
