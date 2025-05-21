
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FertilityInfo = () => {
  return (
    <Card className="border-health-200 shadow-lg mt-8">
      <CardHeader className="bg-health-50 border-b border-health-200">
        <CardTitle className="text-health-800">Solutions to Male and Female Infertility</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-4">
          Infertility can affect both men and women due to various factors. Here are some approaches that may help:
        </p>
        
        <ul className="space-y-3 list-disc pl-5">
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Medical Solutions:</span>{" "}
            Consultation with a fertility specialist, hormonal treatments, surgical options, and assisted reproductive technologies like IVF.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Prophetic Medicine:</span>{" "}
            Traditional remedies based on prophetic guidance include the use of natural herbs, honey, black seed (Nigella sativa), cupping therapy (Hijama), and supplications/prayers for healing.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Lifestyle Changes:</span>{" "}
            Maintaining a healthy diet, managing stress, regular exercise, avoiding smoking and excessive alcohol, and ensuring adequate sleep.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Other Natural Therapies:</span>{" "}
            Acupuncture, yoga, and herbal supplements which have shown benefits in some cases.
          </li>
          
          <li className="text-gray-700">
            <span className="font-semibold text-health-700">Not Mentioned Methods:</span>{" "}
            Psychological counseling and support groups can also be helpful as infertility often affects mental well-being.
          </li>
        </ul>
        
        <p className="mt-4 text-sm text-gray-600 italic border-t border-health-100 pt-3">
          <strong>Note:</strong> Always consult qualified healthcare providers before starting any treatment.
        </p>
      </CardContent>
    </Card>
  );
};

export default FertilityInfo;
