import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, Book, Pill, Star } from 'lucide-react';
import Image from './Image';

// Quranic codes related to different ailments
const quranicCodes = {
  digestive: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
  respiratory: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ",
  skin: "قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ",
  joint: "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ وَشِفَاءٌ لِمَا فِي الصُّدُورِ",
  headache: "وَيَشْفِ صُدُورَ قَوْمٍ مُؤْمِنِينَ",
  sleep: "وَمِنْ آيَاتِهِ مَنَامُكُمْ بِاللَّيْلِ وَالنَّهَارِ",
  immunity: "وَاللَّهُ خَلَقَكُمْ مِنْ تُرَابٍ ثُمَّ مِنْ نُطْفَةٍ",
  stress: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
  fertility: "وَاللَّهُ جَعَلَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا وَجَعَلَ لَكُمْ مِنْ أَزْوَاجِكُمْ بَنِينَ وَحَفَدَةً"
};

interface Treatment {
  name: string;
  description: string;
  usage: string;
  image: string;
  quranicCode?: string;
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
        image: "",
        quranicCode: quranicCodes.digestive
      },
      {
        name: "Black Seed (Nigella sativa)",
        description: "Prophet Muhammad (PBUH) said: 'There is healing in black seed for all diseases except death.'",
        usage: "Take half a teaspoon of black seed oil twice daily, or grind the seeds and mix with honey.",
        image: "",
        quranicCode: quranicCodes.digestive
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
        image: "",
        quranicCode: quranicCodes.respiratory
      },
      {
        name: "Olive Oil",
        description: "Mentioned in the Quran as a blessed tree product.",
        usage: "Take one teaspoon of olive oil in the morning, or apply as chest rub mixed with eucalyptus oil.",
        image: "",
        quranicCode: quranicCodes.respiratory
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
        image: "",
        quranicCode: quranicCodes.skin
      },
      {
        name: "Black Seed Oil",
        description: "Known for its anti-inflammatory and healing properties.",
        usage: "Apply directly to affected skin areas twice daily.",
        image: "",
        quranicCode: quranicCodes.skin
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
        image: "",
        quranicCode: quranicCodes.joint
      },
      {
        name: "Olive Oil and Cumin",
        description: "Traditional remedy for joint pain.",
        usage: "Warm olive oil with ground cumin and apply as a poultice to painful joints.",
        image: "",
        quranicCode: quranicCodes.joint
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
        image: "",
        quranicCode: quranicCodes.headache
      },
      {
        name: "Black Seed Oil",
        description: "Used for its pain-relieving properties.",
        usage: "Rub a few drops onto temples and forehead, or take half a teaspoon orally.",
        image: "",
        quranicCode: quranicCodes.headache
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
        image: "",
        quranicCode: quranicCodes.sleep
      },
      {
        name: "Honey with Warm Milk",
        description: "Traditional remedy for insomnia.",
        usage: "Mix one teaspoon of honey in warm milk and drink 30 minutes before bedtime.",
        image: "",
        quranicCode: quranicCodes.sleep
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
        image: "",
        quranicCode: quranicCodes.immunity
      },
      {
        name: "Zamzam Water with Dates",
        description: "Traditional combination for strength and immunity.",
        usage: "Eat 7 dates with Zamzam water in the morning.",
        image: "",
        quranicCode: quranicCodes.immunity
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
        image: "",
        quranicCode: quranicCodes.stress
      },
      {
        name: "Saffron",
        description: "Used traditionally to lift mood and reduce anxiety.",
        usage: "Add a few strands to hot water or milk and drink once daily.",
        image: "",
        quranicCode: quranicCodes.stress
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
        image: "",
        quranicCode: quranicCodes.fertility
      },
      {
        name: "Dates and Milk",
        description: "Traditional combination for fertility.",
        usage: "Consume 7 dates with a glass of milk daily.",
        image: "",
        quranicCode: quranicCodes.fertility
      },
      {
        name: "Hijama (Cupping)",
        description: "Can help improve blood flow and hormone balance.",
        usage: "Consult a certified Hijama practitioner for proper placement.",
        image: "",
        quranicCode: quranicCodes.fertility
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
    <Card className="border-health-200 shadow-lg relative overflow-hidden">
      {/* Star pattern decorative elements */}
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
        <Star className="h-24 w-24 text-health-100 opacity-20" />
      </div>
      <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/2">
        <Star className="h-24 w-24 text-health-100 opacity-20" />
      </div>
      
      <CardHeader className="bg-health-50 border-b border-health-200 relative">
        <CardTitle className="text-health-800 flex items-center">
          <Book className="mr-2 h-5 w-5 text-health-600" />
          Islamic Prophetic Medicine Finder
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 relative z-10">
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
                  <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-star">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <Image 
                          src={treatment.image} 
                          alt={`${treatment.name} - Islamic prophetic medicine`} 
                          className="h-full" 
                          quranicCode={treatment.quranicCode}
                        />
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
                
                <div className="mt-6 bg-health-50 p-4 rounded-md border border-health-200 shadow-star">
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
          <div className="text-center py-10">
            <div className="relative mx-auto h-24 w-24">
              <Star className="absolute inset-0 h-full w-full text-health-300" />
              <Star className="absolute inset-0 h-full w-full text-health-200 rotate-45" />
            </div>
            <p className="mt-4 text-gray-500">Select a condition above to discover Islamic prophetic remedies</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropheticMedicineSelector;
