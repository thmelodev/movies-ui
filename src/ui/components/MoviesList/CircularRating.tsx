import React from 'react';

interface CircularRatingProps {
  percentage: number;
  size?: number;
  color?: string;
}

const CircularRating: React.FC<CircularRatingProps> = ({ 
  percentage, 
  size = 140, 
  color = 'rgba(255, 224, 0, 1)'
}) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div 
      className="relative flex items-center justify-center font-bold text-white rounded-full bg-black/50 backdrop-blur-[2px] shadow-lg"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90 absolute"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.27)" 
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          className="transition-all duration-1000 ease-out shadow-md" 
          style={{ filter: `drop-shadow(0 0 2px ${color})` }}
        />
      </svg>

      <div className="z-10 flex items-start drop-shadow-md">
        <span className="text-2xl font-semibold font-montserrat" style={{ color: color }}>
          {percentage}
        </span>
        <span className="text-sm mt-auto ml-0.5 mb-0.5 opacity-80 font-semibold">%</span>
      </div>
    </div>
  );
};

export default CircularRating;