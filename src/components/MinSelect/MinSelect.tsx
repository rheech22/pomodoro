'use client';

import { Select, Option } from '@material-tailwind/react';

const MIN_OPTIONS = [ 10, 20, 30, 40, 50, 60 ];

const MinSelect = ({ initValue, onChange }: { initValue: number, onChange: (value: number) => void }) => {
  const handleChange = (value?: string) => {
    value && onChange(parseInt(value));
  };

  return (
    <div className="absolute top-60">
      <Select
        label="Select Focus Time"
        size="md"
        color="purple"
        animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
        value={initValue.toString()}
        onChange={handleChange}
      >
        {
          MIN_OPTIONS.map((value) => {
            return <Option key={value} value={value.toString()}>{`${value}분`}</Option>;
          })
        }
      </Select>
    </div>
  );
};

export default MinSelect;

