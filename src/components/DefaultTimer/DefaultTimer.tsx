import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

import useStore from '@/store';

import { expiryTimestamp } from '@/utils/date';
import { pad } from '@/utils/string';

import MinSelect from '@/components/MinSelect';
import Timetamp from '@/components/Timetamp';
import Pause from '@/components/Pause';
import Done from '@/components/Done';

const DefaultTimer = () => {
  const initMin = 20;

  const [ init, setInit ] = useStore(({ init, setInit }) => [ init, setInit ]);
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

  const handleToggle = () => {
    isRunning ? pause() : resume();
  };

  const handleDone = () => {
    reset();
  };

  useEffect(()=> {
    init && start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ init ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, [ min ]);

  return (
    <>
      <Timetamp timestamp={`${pad(minutes + hours * 60)}:${pad(seconds)}`}/>
      <MinSelect initValue={min} onChange={setMin} />
      <div>
        {init && isRunning && <Pause onToggle={handleToggle}/>}
        {init && !isRunning && <Done onToggle={handleToggle} onReset={handleDone} />}
      </div>
    </>
  );
};

export default DefaultTimer;
