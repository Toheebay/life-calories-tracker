
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, Book, Pill } from 'lucide-react';
import Image from './Image';

interface Treatment {
  name: string;
  description: string;
  usage: string;
  image: string;
}

interface AilmentOption {
  value: string;
  label: string;
  treatments: Treatment[];
}

const ailments: AilmentOption[] = [
  {
    value: "digestive",
    label: "Digestive Issues",
    treatments: [
      {
        name: "Honey",
        description: "Pure natural honey is mentioned in the Quran as a healing substance.",
        usage: "Take one teaspoon of honey mixed with warm water in the morning on an empty stomach.",
        image: "/honey.jpg"
      },
      {
        name: "Black Seed (Nigella sativa)",
        description: "Prophet Muhammad (PBUH) said: 'There is healing in black seed for all diseases except death.'",
        usage: "Take half a teaspoon of black seed oil twice daily, or grind the seeds and mix with honey.",
        image: "/black-seed.jpg"
      }
    ]
  },
  {
    value: "respiratory",
    label: "Respiratory Conditions",
    treatments: [
      {
        name: "Honey and Ginger",
        description: "A combination recommended for throat and lung health.",
        usage: "Mix one teaspoon of honey with a quarter teaspoon of ground ginger and consume twice daily.",
        image: "/honey-ginger.jpg"
      },
      {
        name: "Olive Oil",
        description: "Mentioned in the Quran as a blessed tree product.",
        usage: "Take one teaspoon of olive oil in the morning, or apply as chest rub mixed with eucalyptus oil.",
        image: "/olive-oil.jpg"
      }
    ]
  },
  {
    value: "skin",
    label: "Skin Problems",
    treatments: [
      {
        name: "Henna",
        description: "Used traditionally for skin conditions and cooling properties.",
        usage: "Apply henna paste to affected areas for 30 minutes before washing off.",
        image: "/henna.jpg"
      },
      {
        name: "Black Seed Oil",
        description: "Known for its anti-inflammatory and healing properties.",
        usage: "Apply directly to affected skin areas twice daily.",
        image: "/black-seed-oil.jpg"
      }
    ]
  },
  {
    value: "joint",
    label: "Joint Pain & Arthritis",
    treatments: [
      {
        name: "Hijama (Cupping)",
        description: "A prophetic treatment method for pain and inflammation.",
        usage: "Seek a certified Hijama practitioner for proper application.",
        image: "/hijama.jpg"
      },
      {
        name: "Olive Oil and Cumin",
        description: "Traditional remedy for joint pain.",
        usage: "Warm olive oil with ground cumin and apply as a poultice to painful joints.",
        image: "/olive-cumin.jpg"
      }
    ]
  },
  {
    value: "headache",
    label: "Headaches & Migraines",
    treatments: [
      {
        name: "Hijama (Cupping)",
        description: "Particularly effective for headaches when applied to upper back and neck.",
        usage: "Consult a certified Hijama practitioner for treatment.",
        image: "/hijama-head.jpg"
      },
      {
        name: "Black Seed Oil",
        description: "Used for its pain-relieving properties.",
        usage: "Rub a few drops onto temples and forehead, or take half a teaspoon orally.",
        image: "/black-seed-oil.jpg"
      }
    ]
  },
  {
    value: "sleep",
    label: "Sleep Disorders",
    treatments: [
      {
        name: "Zamzam Water",
        description: "Water from the well of Zamzam, believed to have healing properties.",
        usage: "Drink a small cup before sleep while making dua (supplication).",
        image: "/zamzam.jpg"
      },
      {
        name: "Honey with Warm Milk",
        description: "Traditional remedy for insomnia.",
        usage: "Mix one teaspoon of honey in warm milk and drink 30 minutes before bedtime.",
        image: "/honey-milk.jpg"
      }
    ]
  },
  {
    value: "immunity",
    label: "Weak Immunity",
    treatments: [
      {
        name: "Black Seed (Nigella sativa)",
        description: "Strengthens immune system and has antioxidant properties.",
        usage: "Take one teaspoon daily mixed with honey.",
        image: "/black-seed.jpg"
      },
      {
        name: "Zamzam Water with Dates",
        description: "Traditional combination for strength and immunity.",
        usage: "Eat 7 dates with Zamzam water in the morning.",
        image: "/dates.jpg"
      }
    ]
  },
  {
    value: "stress",
    label: "Stress & Anxiety",
    treatments: [
      {
        name: "Prayer and Dhikr",
        description: "Spiritual practice that brings peace and tranquility.",
        usage: "Regular prayer five times a day and remembrance of Allah.",
        image: "/prayer.jpg"
      },
      {
        name: "Saffron",
        description: "Used traditionally to lift mood and reduce anxiety.",
        usage: "Add a few strands to hot water or milk and drink once daily.",
        image: "/saffron.jpg"
      }
    ]
  },
  {
    value: "fertility",
    label: "Fertility Issues",
    treatments: [
      {
        name: "Black Seed (Nigella sativa)",
        description: "Known to balance hormones and improve reproductive health.",
        usage: "Take one teaspoon daily with honey for at least three months.",
        image: "/black-seed.jpg"
      },
      {
        name: "Dates and Milk",
        description: "Traditional combination for fertility.",
        usage: "Consume 7 dates with a glass of milk daily.",
        image: "/dates-milk.jpg"
      },
      {
        name: "Hijama (Cupping)",
        description: "Can help improve blood flow and hormone balance.",
        usage: "Consult a certified Hijama practitioner for proper placement.",
        image: "/hijama.jpg"
      }
    ]
  }
];

const PropheticMedicineSelector = () => {
  const [selectedAilment, setSelectedAilment] = useState<string>("");
  const [selectedTreatments, setSelectedTreatments] = useState<Treatment[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAilmentChange = (value: string) => {
    setSelectedAilment(value);
    const ailment = ailments.find(a => a.value === value);
    setSelectedTreatments(ailment ? ailment.treatments : []);
    setIsOpen(true);
  };

  return (
    <Card className="border-health-200 shadow-lg">
      <CardHeader className="bg-health-50 border-b border-health-200">
        <CardTitle className="text-health-800 flex items-center">
          <Book className="mr-2 h-5 w-5 text-health-600" />
          Islamic Prophetic Medicine Finder
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What health condition are you seeking treatment for?
          </label>
          <Select onValueChange={handleAilmentChange} value={selectedAilment}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a condition" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {ailments.map((ailment) => (
                <SelectItem key={ailment.value} value={ailment.value}>
                  {ailment.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          {selectedTreatments.length > 0 && (
            <div className="space-y-4 mt-2">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-between w-full bg-health-50 hover:bg-health-100 border-health-200"
                >
                  <span className="flex items-center">
                    <Pill className="mr-2 h-4 w-4" />
                    {selectedTreatments.length} Prophetic Treatments Available
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-4">
                {selectedTreatments.map((treatment, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden bg-white">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <div className="text-sm text-gray-500">Image placeholder</div>
                        </div>
                      </div>
                      <div className="p-4 md:w-2/3">
                        <h3 className="font-semibold text-lg text-health-800">{treatment.name}</h3>
                        <p className="text-gray-700 mt-1 text-sm">{treatment.description}</p>
                        <div className="mt-3">
                          <h4 className="font-medium text-health-700 text-sm">How to Use:</h4>
                          <p className="text-gray-600 text-sm">{treatment.usage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 bg-health-50 p-4 rounded-md border border-health-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-health-700">Contact us to obtain these treatments:</strong><br />
                    Phone: +2347067412852<br />
                    Email: adebayoajani23@gmail.com<br />
                    Address: Block 331 Jakande Estate, Amuwo Odofin, Lagos, Nigeria
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          )}
        </Collapsible>

        {selectedAilment === "" && (
          <div className="text-center py-6">
            <Book className="mx-auto h-12 w-12 text-health-300" />
            <p className="mt-2 text-gray-500">Select a condition above to discover Islamic prophetic remedies</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropheticMedicineSelector;
