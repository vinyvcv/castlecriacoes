import React from 'react';

interface CastleLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'text-only' | 'symbol-only';
  lightBg?: boolean;
}

export const CastleLogo: React.FC<CastleLogoProps> = ({
  className = '',
  variant = 'full',
  lightBg = true
}) => {
  // Brand color mapping
  const navyColor = '#1C2D5A';
  
  if (variant === 'text-only') {
    return (
      <div className={`flex flex-col items-center justify-center select-none ${className}`}>
        <div className="flex items-center space-x-[0.15em] font-serif text-2xl md:text-3xl font-normal tracking-wide">
          <span style={{ color: '#1E6548' }}>C</span>
          <span style={{ color: '#EAA227' }}>A</span>
          <span style={{ color: '#D81B60' }}>S</span>
          <span style={{ color: '#1C2D5A' }}>T</span>
          <span style={{ color: '#E05A2B' }}>L</span>
          <span style={{ color: '#1E6548' }}>E</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.28em] font-medium mt-0.5 text-[#1C2D5A] whitespace-nowrap">
          Identidade Visual Exclusiva
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 300 240"
        className="w-full h-auto max-h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Castle Criações Logo"
      >
        {/* Curved Ground Base */}
        <path
          d="M 25 185 Q 150 160 275 185"
          stroke={navyColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* --- MAIN CENTER TOWER --- */}
        {/* Center Tower Base */}
        <rect x="130" y="80" width="40" height="92" stroke={navyColor} strokeWidth="2.2" fill="none" />
        
        {/* Center Tower Roof */}
        <polygon points="130,80 150,42 170,80" stroke={navyColor} strokeWidth="2.2" fill="none" />
        
        {/* Center Flagpole & Flag */}
        <line x1="150" y1="42" x2="150" y2="22" stroke={navyColor} strokeWidth="2" />
        <path d="M 150 22 C 162 20 168 28 178 24 L 178 35 C 168 39 162 31 150 33 Z" fill={navyColor} />

        {/* Center Tower Arched Window & Balcony */}
        <path d="M 142 88 A 8 8 0 0 1 158 88 L 158 102 L 142 102 Z" stroke={navyColor} strokeWidth="1.8" fill="none" />
        <line x1="150" y1="88" x2="150" y2="102" stroke={navyColor} strokeWidth="1.2" />
        <line x1="142" y1="95" x2="158" y2="95" stroke={navyColor} strokeWidth="1.2" />
        {/* Balcony Railing */}
        <rect x="139" y="98" width="22" height="6" stroke={navyColor} strokeWidth="1.4" fill="none" />
        <line x1="143" y1="98" x2="143" y2="104" stroke={navyColor} strokeWidth="1" />
        <line x1="147" y1="98" x2="147" y2="104" stroke={navyColor} strokeWidth="1" />
        <line x1="151" y1="98" x2="151" y2="104" stroke={navyColor} strokeWidth="1" />
        <line x1="155" y1="98" x2="155" y2="104" stroke={navyColor} strokeWidth="1" />

        {/* Center Main Arch Gate */}
        <path d="M 137 174 L 137 148 A 13 13 0 0 1 163 148 L 163 174 Z" stroke={navyColor} strokeWidth="2" fill="none" />
        <line x1="150" y1="135" x2="150" y2="174" stroke={navyColor} strokeWidth="1.5" />
        {/* Door Ring Handles */}
        <circle cx="145" cy="160" r="2" stroke={navyColor} strokeWidth="1.2" fill="none" />
        <circle cx="155" cy="160" r="2" stroke={navyColor} strokeWidth="1.2" fill="none" />

        {/* Upper Crenellations (Center Curtain Wall) */}
        <path d="M 112 118 L 188 118" stroke={navyColor} strokeWidth="2" />
        <path d="M 115 118 L 115 110 L 122 110 L 122 118 L 130 118 L 130 110 L 138 110 L 138 118 L 162 118 L 162 110 L 170 110 L 170 118 L 178 118 L 178 110 L 185 110 L 185 118" stroke={navyColor} strokeWidth="1.8" fill="none" />

        {/* --- LEFT TOWER --- */}
        {/* Left Side Tower Base */}
        <rect x="98" y="118" width="28" height="58" stroke={navyColor} strokeWidth="2" fill="none" />
        {/* Left Outer Turret */}
        <rect x="94" y="98" width="22" height="30" stroke={navyColor} strokeWidth="1.8" fill="none" />
        <polygon points="94,98 105,70 116,98" stroke={navyColor} strokeWidth="1.8" fill="none" />
        {/* Left Flag */}
        <line x1="105" y1="70" x2="105" y2="52" stroke={navyColor} strokeWidth="1.8" />
        <path d="M 105 52 C 113 50 118 57 125 54 L 125 62 C 118 65 113 58 105 60 Z" fill={navyColor} />
        {/* Left Turret Window */}
        <path d="M 101 108 A 4 4 0 0 1 109 108 L 109 116 L 101 116 Z" stroke={navyColor} strokeWidth="1.4" fill="none" />

        {/* --- RIGHT TOWER --- */}
        {/* Right Side Tower Base */}
        <rect x="174" y="118" width="28" height="58" stroke={navyColor} strokeWidth="2" fill="none" />
        {/* Right Outer Turret */}
        <rect x="184" y="98" width="22" height="30" stroke={navyColor} strokeWidth="1.8" fill="none" />
        <polygon points="184,98 195,70 206,98" stroke={navyColor} strokeWidth="1.8" fill="none" />
        {/* Right Flag */}
        <line x1="195" y1="70" x2="195" y2="52" stroke={navyColor} strokeWidth="1.8" />
        <path d="M 195 52 C 203 50 208 57 215 54 L 215 62 C 208 65 203 58 195 60 Z" fill={navyColor} />
        {/* Right Turret Window */}
        <path d="M 191 108 A 4 4 0 0 1 199 108 L 199 116 L 191 116 Z" stroke={navyColor} strokeWidth="1.4" fill="none" />

        {/* Brick Textures & Details */}
        <path d="M 116 142 L 124 142 M 120 148 L 128 148 M 115 158 L 123 158" stroke={navyColor} strokeWidth="1" strokeLinecap="round" />
        <path d="M 176 142 L 184 142 M 172 150 L 180 150 M 177 160 L 185 160" stroke={navyColor} strokeWidth="1" strokeLinecap="round" />
        {/* Small Arch Windows in Middle Body */}
        <path d="M 144 122 A 3 3 0 0 1 150 122 L 150 128 L 144 128 Z" fill={navyColor} />
        <path d="M 156 122 A 3 3 0 0 1 162 122 L 162 128 L 156 128 Z" fill={navyColor} />
        <path d="M 144 132 A 3 3 0 0 1 150 132 L 150 138 L 144 138 Z" fill={navyColor} />
        <path d="M 156 132 A 3 3 0 0 1 162 132 L 162 138 L 156 138 Z" fill={navyColor} />

        {/* --- BRAND NAME "CASTLE" WITH EXACT MULTICOLOR LETTERS --- */}
        {variant !== 'symbol-only' && (
          <g transform="translate(150, 204)" textAnchor="middle">
            <text
              fontFamily="Cormorant Garamond, serif"
              fontSize="34"
              fontWeight="500"
              letterSpacing="3"
            >
              <tspan fill="#1E6548" x="-75">C</tspan>
              <tspan fill="#EAA227" x="-45">A</tspan>
              <tspan fill="#D81B60" x="-15">S</tspan>
              <tspan fill="#1C2D5A" x="15">T</tspan>
              <tspan fill="#E05A2B" x="43">L</tspan>
              <tspan fill="#1E6548" x="70">E</tspan>
            </text>

            {/* Subtitle Line 1: Identidade Visual */}
            <text
              y="18"
              x="0"
              fill={navyColor}
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="4.8"
            >
              IDENTIDADE VISUAL
            </text>

            {/* Subtitle Line 2: Exclusiva */}
            <text
              y="28"
              x="0"
              fill={navyColor}
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="5.8"
            >
              EXCLUSIVA
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
