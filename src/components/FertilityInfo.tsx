
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from 'lucide-react';

const FertilityInfo = () => {
  return (
    <Card className="border-health-200 shadow-lg mt-8">
      <CardHeader className="bg-health-50 border-b border-health-200">
        <CardTitle className="text-health-800">Islamic Prophetic Medicine Solutions</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-4">
          Islamic Prophetic Medicine offers natural treatments based on traditional remedies passed down through generations. 
          These remedies can help with fertility issues and many other ailments from young to adult.
        </p>
        
        <h3 className="text-lg font-semibold text-health-700 mb-2">Common Remedies:</h3>
        <ul className="space-y-3 list-disc pl-5 mb-6">
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Black Seed (Nigella sativa):</span>{" "}
            Known as "habbatus sauda," black seed is considered a cure for all diseases except death. Used for reproductive health, immune system boosting, and inflammation reduction.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Honey:</span>{" "}
            Pure honey has antibacterial properties and is used to balance hormones, increase vitality, and as a carrier for other herbs.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Olive Oil:</span>{" "}
            Contains antioxidants that protect cellular health and is used for hormonal balance and reproductive wellness.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Hijama (Cupping):</span>{" "}
            Removes toxins from the body and can help with various conditions including infertility and hormonal imbalances.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Zamzam Water:</span>{" "}
            Sacred water believed to have healing properties when combined with specific prayers and herbs.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-health-700 mb-2">Other Conditions We Treat:</h3>
        <ul className="space-y-2 list-disc pl-5 mb-6 grid grid-cols-1 md:grid-cols-2">
          <li className="text-gray-700">Digestive disorders</li>
          <li className="text-gray-700">Respiratory conditions</li>
          <li className="text-gray-700">Skin problems</li>
          <li className="text-gray-700">Joint pain and arthritis</li>
          <li className="text-gray-700">Headaches and migraines</li>
          <li className="text-gray-700">Sleep disorders</li>
          <li className="text-gray-700">Weak immunity</li>
          <li className="text-gray-700">Stress and anxiety</li>
        </ul>
        
        <div className="bg-health-50 p-4 rounded-md border border-health-100 mb-6">
          <h3 className="text-lg font-semibold text-health-700 mb-2">Contact for Treatments:</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-health-600" />
              <span className="text-gray-700">+2347067412852</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-health-600" />
              <span className="text-gray-700">adebayoajani23@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-health-600" />
              <span className="text-gray-700">Block 331 Jakande Estate, Amuwo Odofin, Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 italic border-t border-health-100 pt-3">
          <strong>Note:</strong> Always consult qualified healthcare providers before starting any treatment. These remedies are based on traditional practices and should complement, not replace, professional medical advice.
        </p>
      </CardContent>
    </Card>
  );
};

export default FertilityInfo;
