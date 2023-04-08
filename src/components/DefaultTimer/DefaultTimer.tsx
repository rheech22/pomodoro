'use client';

import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

import { expiryTimestamp } from '@/utils/date';
import { pad } from '@/utils/string';

import MinSelect from '@/components/MinSelect';
import Timetamp from '@/components/Timetamp';
import Run from '@/components/Run';
import Done from '@/components/Done';

const DefaultTimer = () => {
  const initMin = 20;

  const [ init, setInit ] = useState(false);
  const [ min, setMin ] = useState(initMin);

  const reset = () => {
    restart(expiryTimestamp(min), false);
    setInit(false);
  };

  const {
    start,
    pause,
    resume,
    restart,
    hours,
    minutes,
    seconds,
    isRunning,
  } = useTimer({
    expiryTimestamp: expiryTimestamp(min),
    autoStart: false,
    onExpire: reset,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, [ min ]);

  const handleToggle = () => {
    isRunning ? pause() : resume();
  };

  const handleStart = () => {
    start(), setInit(true);
  };

  const handleDone = () => {
    reset();
  };

  return (
    <>
      <Timetamp timestamp={`${pad(minutes + hours * 60)}:${pad(seconds)}`}/>
      <MinSelect initValue={min} onChange={setMin} />
      <div>
        {(!init || isRunning) && <Run init={init} isRunning={isRunning} onStart={handleStart} onToggle={handleToggle}/>}
        {init && !isRunning && <Done onToggle={handleToggle} onReset={handleDone} />}
      </div>
    </>
  );
};

export default DefaultTimer;
