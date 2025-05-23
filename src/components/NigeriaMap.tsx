
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star } from 'lucide-react';

const NigeriaMap = () => {
  return (
    <Card className="border-health-200 shadow-lg mt-8 relative overflow-hidden">
      {/* Star decoration */}
      <div className="absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/3 z-0 opacity-10">
        <Star className="h-32 w-32 text-health-800" />
      </div>
      
      <CardHeader className="bg-health-50 border-b border-health-200 relative z-10">
        <CardTitle className="text-health-800 flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-health-600" />
          Our Location in Nigeria
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 relative z-10">
        <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
          <iframe 
            title="Nigeria Map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.6163537524!2d3.1172547274016195!3d6.5485038999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8db3bce7dddd%3A0xb1ba537dba7b7e7c!2sJakande%20Estate%2C%20Amuwo%20Odofin%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716396653263!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Located in Block 331 Jakande Estate, Amuwo Odofin, Lagos, Nigeria. Visit us for consultations and to obtain herbal remedies.
          </p>
          <a 
            href="https://goo.gl/maps/jH1Z1Z1Z1Z1Z1Z1Z9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-health-600 hover:bg-health-700 text-white font-medium py-2 px-4 rounded text-sm whitespace-nowrap text-center"
          >
            Get Directions
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default NigeriaMap;
