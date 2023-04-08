'use client';

const MIN_OPTIONS = [ 10, 20, 30, 40, 50, 60 ];

const MinSelect = ({ initValue, onChange }: { initValue: number, onChange: (value: number) => void }) => {
  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(currentTarget.value));
  };

  return (
    <select value={initValue} onChange={handleChange}>
      {
        MIN_OPTIONS.map((value) => {
          return <option key={value} value={value}>{`${value}분`}</option>;
        })
      }
    </select>
  );
};

export default MinSelect;
