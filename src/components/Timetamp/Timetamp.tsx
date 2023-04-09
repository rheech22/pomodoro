import { Typography } from '@material-tailwind/react';

const Timetamp = ({
  className = '',
  timestamp,
  color = 'purple',
}: {
  className?: string;
  timestamp: string;
  color?: string;
}) => {
  return (
    <div className={`mb-20 ${className}`}>
      <Typography className="text-9xl font-bold" color={color} textGradient>
        {timestamp}
      </Typography>
    </div>
  );
};

export default Timetamp;
