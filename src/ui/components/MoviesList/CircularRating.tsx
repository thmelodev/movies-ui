import React from 'react';

interface CircularRatingProps {
  percentage: number;
  size?: number;
}

const CircularRating: React.FC<CircularRatingProps> = ({
  percentage,
  size = 140, }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  const colorCircularRating = percentage >= 70 ? 'rgba(0, 255, 0, 1)' : percentage >= 40 ? 'rgba(255, 224, 0, 1)' : 'rgba(255, 0, 0, 1)';


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
          stroke={colorCircularRating}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          className="transition-all duration-1000 ease-out shadow-md"
          style={{ filter: `drop-shadow(0 0 2px ${colorCircularRating})` }}
        />
      </svg>

      <div className="z-10 flex items-start drop-shadow-md">
        <span className="text-2xl font-semibold font-montserrat" style={{ color: colorCircularRating }}>
          {percentage}
        </span>
        <span className="text-sm mt-auto ml-0.5 mb-0.5 opacity-80 font-semibold">%</span>
      </div>
    </div>
  );
};

export default CircularRating;