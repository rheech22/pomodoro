'use client';

import { useState } from 'react';

import useStore from '@/store';

import { get } from '@/utils/object';

import Stopwatch from '@/components/Stopwatch';
import DefaultTimer from '@/components/DefaultTimer';
import TimerRadio from '@/components/TimerMode';

const Timer = () => {
  const setInit = useStore(get('setInit'));
  const [isTimer, setIsTimer] = useState(true);

  const handleChange = () => {
    setIsTimer((prev) => !prev);
    setInit(false);
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      <TimerRadio isTimer={isTimer} onChange={handleChange} />
      {isTimer ? <DefaultTimer /> : <Stopwatch />}
    </div>
  );
};

export default Timer;
