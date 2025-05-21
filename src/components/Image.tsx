
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  quranicCode?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = "", quranicCode }) => {
  // The component handles displaying images with a Quranic code fallback
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt}
          onError={(e) => {
            // If image fails to load, show the Quranic code
            const imgElement = e.target as HTMLImageElement;
            imgElement.style.display = 'none';
            const parent = imgElement.parentElement;
            if (parent) {
              parent.classList.add('flex', 'items-center', 'justify-center', 'bg-health-50', 'text-health-700');
            }
          }}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-health-50 p-4 text-center">
          <div className="max-w-full">
            <div className="font-arabic text-xl md:text-2xl mb-2 text-health-800">{quranicCode}</div>
            <div className="text-xs md:text-sm text-health-600">{alt}</div>
          </div>
        </div>
      )}
      {!src && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="star-pattern"></div>
        </div>
      )}
    </div>
  );
};

export default Image;
