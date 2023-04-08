'use client';

import { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';

import { pad } from '@/utils/string';

import Timetamp from '@/components/Timetamp';
import Run from '@/components/Run';
import Done from '@/components/Done';

const Stopwatch = () => {
  const [ init, setInit ] = useState(false);

  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
    isRunning,
  } = useStopwatch({ autoStart: false });

  const handleToggle = () => {
    isRunning ? pause() : start();
  };

  const handleStart = () => {
    start(), setInit(true);
  };

  const handleDone = () => {
    reset(undefined, false), setInit(false);
  };

  return (
    <>
      <Timetamp timestamp={`${pad(minutes + hours * 60)}:${pad(seconds)}`} color="green"/>
      <div>

        {(!init || isRunning) && <Run init={init} color="green" onStart={handleStart} onToggle={handleToggle}/>}
        {init && !isRunning && <Done onToggle={handleToggle} onReset={handleDone} />}
      </div>
    </>
  );
};

export default Stopwatch;
