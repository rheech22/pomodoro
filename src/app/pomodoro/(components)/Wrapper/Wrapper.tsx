"use client"

import { ChangeEvent, useState } from 'react';
import Timer from '../Timer';

const MIN_OPTIONS = [10, 20, 30, 40, 50, 60, 70];
const INIT_MIN = MIN_OPTIONS[1];

const Wrapper = () => {
  const [min, setMin] = useState(INIT_MIN);
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + min * 60);

  const handleChange = ({currentTarget}: ChangeEvent<HTMLSelectElement>) => {
    setMin(parseInt(currentTarget.value));
  }

  return (
    <>
     <Timer time={time}/>
     <select value={min} onChange={handleChange}>
        {
          MIN_OPTIONS.map((value) => {
            return <option key={value} value={value}>{`${value}분`}</option>
          })
        }
      </select>
    </>
  )
}

export default Wrapper;
