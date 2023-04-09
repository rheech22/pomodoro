'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

const WhatToDo = () => {
  const [ input, setInput ] = useState('');

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="What are u gonna focus on"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        className="pr-20"
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Button
        size="sm"
        color={input ? 'blue' : 'blue-gray'}
        disabled={!input}
        className="!absolute right-1 top-1 rounded"
      >
        Add
      </Button>
    </div>
  );
};

export default WhatToDo;
