
import React from 'react';
import CalorieCalculator from '@/components/CalorieCalculator';
import FertilityInfo from '@/components/FertilityInfo';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-health-50 py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-health-800">Daily Calorie Needs Calculator</h1>
          <p className="text-gray-600 mt-2">Calculate your daily caloric requirements based on your personal metrics</p>
        </header>

        <div className="mb-10">
          <CalorieCalculator />
        </div>

        <div className="mb-8">
          <FertilityInfo />
        </div>

        <footer className="text-center text-gray-500 text-sm mt-12 pb-4">
          <p>© 2025 Daily Calorie Needs Calculator. All information provided is for educational purposes only.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
