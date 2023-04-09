import { Button } from '@material-tailwind/react';
import { colors } from '@material-tailwind/react/types/generic';

interface RunProps {
  onToggle: () => void;
  color?: colors;
}

const Pause = ({ onToggle, color = 'purple' }: RunProps) => {
  return (<Button onClick={onToggle} color={color} ripple={true}>일시정지</Button>);
};

export default Pause;

