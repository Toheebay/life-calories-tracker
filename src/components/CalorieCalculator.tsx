
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalorieResult from './CalorieResult';

const CalorieCalculator = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('1.2');
  const [calories, setCalories] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);

  const calculateCalories = () => {
    const ageNum = parseInt(age);
    const heightNum = parseInt(height);
    const weightNum = parseInt(weight);
    const activityNum = parseFloat(activityLevel);
    
    if (!ageNum || !heightNum || !weightNum) {
      setShowError(true);
      return;
    }
    
    setShowError(false);
    
    let bmr;
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }
    
    const totalCalories = Math.round(bmr * activityNum);
    setCalories(totalCalories);
  };

  return (
    <Card className="shadow-lg border-health-200">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input 
              type="number" 
              id="age" 
              placeholder="Years"
              value={age}
              onChange={(e) => setAge(e.target.value)} 
              className="border-health-200 focus:border-health-500" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger className="border-health-200 focus:border-health-500">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input 
              type="number" 
              id="height" 
              placeholder="Centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)} 
              className="border-health-200 focus:border-health-500" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input 
              type="number" 
              id="weight" 
              placeholder="Kilograms"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} 
              className="border-health-200 focus:border-health-500" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="activity">Activity Level</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger className="border-health-200 focus:border-health-500">
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.2">Sedentary</SelectItem>
                <SelectItem value="1.375">Lightly active</SelectItem>
                <SelectItem value="1.55">Moderately active</SelectItem>
                <SelectItem value="1.725">Very active</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={calculateCalories}
            className="w-full bg-health-500 hover:bg-health-600 text-white"
          >
            Calculate Calories
          </Button>
          
          {showError && (
            <p className="text-red-500 text-sm">Please enter valid age, height, and weight.</p>
          )}

          {calories !== null && <CalorieResult calories={calories} />}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieCalculator;
