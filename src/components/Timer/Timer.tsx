'use client';

import { useState } from 'react';
import Stopwatch from '@/components/Stopwatch';
import DefaultTimer from '@/components/DefaultTimer';
import TimerRadio from '@/components/TimerMode';

const Timer = () => {
  const [isTimer, setIsTimer] = useState(true);

  const handleChange = () => {
    setIsTimer((prev) => !prev);
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      <TimerRadio isTimer={isTimer} onChange={handleChange} />
      {isTimer ? <DefaultTimer /> : <Stopwatch />}
    </div>
  );
};

export default Timer;
