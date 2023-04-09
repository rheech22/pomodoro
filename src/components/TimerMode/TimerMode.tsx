import { Radio } from '@material-tailwind/react';

const TimerMode = ({ isTimer, onChange }: { isTimer: boolean; onChange: () => void}) => {
  return (
    <div className="flex gap-10 mb-10">
      <Radio id="timer" name="type" label="Timer" color="purple" checked={isTimer} onChange={onChange} disabled={isTimer}/>
      <Radio id="stopwatch" name="type" label="Stopwatch" color="green" checked={!isTimer} onChange={onChange} disabled={!isTimer}/>
    </div>
  );
};

export default TimerMode;
