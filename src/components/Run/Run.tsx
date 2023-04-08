import { Button } from '@material-tailwind/react';
import { colors } from '@material-tailwind/react/types/generic';

interface RunProps {
  init: boolean;
  onToggle: () => void;
  onStart: () => void;
  color?: colors;
}

const Run = ({ init, onToggle, onStart, color = 'purple' }: RunProps) => {
  return (<Button onClick={init ? onToggle : onStart } color={init ? color : 'pink'} ripple={true}>{init ? '일시정지' : '집중 시작하기'}</Button>);
};

export default Run;

