'use client';

import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

const MIN_OPTIONS = [ 10, 20, 30, 40, 50, 60 ];
const INIT_MIN = MIN_OPTIONS[1];

interface TimerProps {
  time: Date;
}

const pad = (value: number) => {
  return value.toString().padStart(2, '0');
};

const Timer = ({ time }: TimerProps) => {
  const [ init, setInit ] = useState(false);

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
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => alert('expire !'),
  });

  useEffect(()=> {
    restart(time, false);
    setInit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ time ]);

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Timer</p>
      <div style={{ fontSize: '100px' }}>
        <span>{pad(minutes + hours * 60)}:{pad(seconds)}</span>
      </div>
      {init
        ? <button onClick={()=> isRunning ? pause() : resume()}>
            {isRunning ? '일시정지' : '재개'}
          </button>
        : <button onClick={()=> (start(), setInit(true))}>시작</button>
      }
    </div>
  );
};

export default Timer;
