
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = "" }) => {
  // The component handles displaying images with a fallback if they fail to load
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt}
        onError={(e) => {
          // If image fails to load, replace with a placeholder
          const imgElement = e.target as HTMLImageElement;
          imgElement.onerror = null; // Prevent infinite loop
          imgElement.src = '/placeholder.svg'; // Use built-in placeholder
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Image;
