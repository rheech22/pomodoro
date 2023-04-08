import { Button } from '@material-tailwind/react';

interface Props {
  onToggle: () => void;
  onReset: () => void;
}

const Done = ({ onToggle, onReset }: Props) => {
  return (
    <div className="flex gap-4">
      <Button onClick={onToggle} color="amber" ripple={true}>계속</Button>
      <Button onClick={onReset} variant="outlined" color="red" ripple={true}>중지</Button>
    </div>
  );
};

export default Done;
