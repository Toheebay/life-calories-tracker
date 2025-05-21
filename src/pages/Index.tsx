
import React from 'react';
import CalorieCalculator from '@/components/CalorieCalculator';
import FertilityInfo from '@/components/FertilityInfo';
import NigeriaMap from '@/components/NigeriaMap';
import PropheticMedicineSelector from '@/components/PropheticMedicineSelector';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-health-50 py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <header className="text-center mb-8 star-bg-container">
          <h1 className="text-3xl md:text-5xl font-bold text-health-800 py-4 relative z-10">
            Tohebah Islamic Health & Wellness Center
          </h1>
          <div className="star-bg"></div>
          <p className="text-gray-600 mt-2">Calculate your daily caloric requirements and discover natural Islamic prophetic remedies</p>
        </header>

        <div className="mb-10">
          <PropheticMedicineSelector />
        </div>

        <div className="mb-10">
          <CalorieCalculator />
        </div>

        <div className="mb-8">
          <FertilityInfo />
        </div>

        <div className="mb-8">
          <NigeriaMap />
        </div>

        <footer className="text-center text-gray-500 text-sm mt-12 pb-4">
          <p>© 2025 Tohebah Islamic Health & Wellness Center. All information provided is for educational purposes only.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
