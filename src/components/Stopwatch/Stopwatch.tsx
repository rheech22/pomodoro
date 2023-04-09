import { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

import useStore from '@/store';

import { pad } from '@/utils/string';

import Timetamp from '@/components/Timetamp';
import Pause from '@/components/Pause';
import Done from '@/components/Done';

const Stopwatch = () => {
  const [init, setInit] = useStore(({ init, setInit }) => [init, setInit]);

  const { seconds, minutes, hours, start, pause, reset, isRunning } =
    useStopwatch({ autoStart: false });

  const handleToggle = () => {
    isRunning ? pause() : start();
  };

  const handleDone = () => {
    reset(undefined, false), setInit(false);
  };

  useEffect(() => {
    init && start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [init]);

  return (
    <>
      <Timetamp
        timestamp={`${pad(minutes + hours * 60)}:${pad(seconds)}`}
        color="green"
      />
      <div>
        {init && isRunning && <Pause onToggle={handleToggle} />}
        {init && !isRunning && (
          <Done onToggle={handleToggle} onReset={handleDone} />
        )}
      </div>
    </>
  );
};

export default Stopwatch;
