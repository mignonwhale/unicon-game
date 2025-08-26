'use client'

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-gold/30 shadow-xl max-w-2xl mx-auto ${className}`}>
      <h3 className="text-gold text-lg sm:text-xl mb-3 font-bold uppercase tracking-wide">전시회까지 남은 시간</h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        <div className="flex items-center justify-center bg-black/30 rounded-lg p-2 sm:p-3">
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-b from-gold to-yellow-600 bg-clip-text text-transparent">
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
          <span className="text-gold ml-1 text-xs sm:text-sm">일</span>
        </div>
        <div className="flex items-center justify-center bg-black/30 rounded-lg p-2 sm:p-3">
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-b from-gold to-yellow-600 bg-clip-text text-transparent">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
          <span className="text-gold ml-1 text-xs sm:text-sm">시간</span>
        </div>
        <div className="flex items-center justify-center bg-black/30 rounded-lg p-2 sm:p-3">
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-b from-gold to-yellow-600 bg-clip-text text-transparent">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-gold ml-1 text-xs sm:text-sm">분</span>
        </div>
        <div className="flex items-center justify-center bg-black/30 rounded-lg p-2 sm:p-3">
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-b from-gold to-yellow-600 bg-clip-text text-transparent">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-gold ml-1 text-xs sm:text-sm">초</span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <p className="text-white/80 text-xs sm:text-sm font-medium">2025년 9월 15일 - 17일 | 서울 코엑스 전시장</p>
      </div>
    </div>
  );
}