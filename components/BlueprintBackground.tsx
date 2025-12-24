
import React from 'react';

const BlueprintBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Abstract Architectural Shapes */}
        <circle cx="10%" cy="20%" r="100" fill="none" stroke="gray" strokeWidth="1" />
        <rect x="70%" y="60%" width="200" height="300" fill="none" stroke="gray" strokeWidth="1" transform="rotate(15, 70%, 60%)" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="gray" strokeWidth="0.5" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};

export default BlueprintBackground;
