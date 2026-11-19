import React, { useState } from 'react';
import { CastleLogo } from './CastleLogo';

interface EditorialImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#F6F1E9] via-[#EFE7DC] to-[#E6DCCE] flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 opacity-75 mb-2">
          <CastleLogo variant="symbol-only" />
        </div>
        {fallbackTitle && (
          <p className="font-serif italic text-base text-[#1C2D5A] font-medium leading-snug">
            {fallbackTitle}
          </p>
        )}
        {fallbackSubtitle && (
          <span className="text-[11px] font-sans text-[#5E564B] mt-1">
            {fallbackSubtitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};
