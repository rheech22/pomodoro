import { Radio } from '@material-tailwind/react';

const TimerMode = ({ isTimer, onClick }: { isTimer: boolean; onClick: () => void}) => {
  return (
    <div className="flex gap-10 mb-10">
      <Radio id="timer" name="type" label="Timer" color="purple" checked={isTimer} onClick={onClick} disabled={isTimer}/>
      <Radio id="stopwatch" name="type" label="Stopwatch" color="green" checked={!isTimer} onClick={onClick} disabled={!isTimer}/>
    </div>
  );
};

export default TimerMode;
