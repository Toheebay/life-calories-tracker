
import React from 'react';

interface CalorieResultProps {
  calories: number;
}

const CalorieResult = ({ calories }: CalorieResultProps) => {
  return (
    <div className="mt-6 p-4 bg-health-50 border border-health-200 rounded-md text-center">
      <p className="text-xl font-semibold text-health-800">
        You need about <span className="text-health-600 text-2xl">{calories}</span> calories/day
      </p>
      <p className="text-sm text-health-700">to maintain your current weight</p>
    </div>
  );
};

export default CalorieResult;
