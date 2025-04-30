import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex items-center space-x-1 font-mono font-bold text-amber-400">
      <div className="flex items-center">
        <span>{formatNumber(timeLeft.hours)}</span>
        <span>:</span>
      </div>
      <div className="flex items-center">
        <span>{formatNumber(timeLeft.minutes)}</span>
        <span>:</span>
      </div>
      <div>
        <span>{formatNumber(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;