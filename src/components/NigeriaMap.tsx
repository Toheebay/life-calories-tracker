
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NigeriaMap = () => {
  return (
    <Card className="border-health-200 shadow-lg mt-8">
      <CardHeader className="bg-health-50 border-b border-health-200">
        <CardTitle className="text-health-800">Our Location in Nigeria</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
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
        <p className="mt-4 text-sm text-gray-600">
          Located in Block 331 Jakande Estate, Amuwo Odofin, Lagos, Nigeria. Visit us for consultations and to obtain herbal remedies for various ailments.
        </p>
      </CardContent>
    </Card>
  );
};

export default NigeriaMap;
