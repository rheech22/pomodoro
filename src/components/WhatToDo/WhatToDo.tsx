'use client';

import { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import useStore from '@/store';

const WhatToDo = () => {
  const [init, setInit, addTask] = useStore(({ addTask, init, setInit }) => [
    init,
    setInit,
    addTask,
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    addTask(input);
    // setInput('');
    setInit(true);
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      {init ? (
        <h1>{input}에 집중하는 중...</h1>
      ) : (
        <>
          <Input
            type="text"
            label="What are u gonna focus on"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
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
            onClick={handleSubmit}
          >
            집중 시작하기
          </Button>
        </>
      )}
    </div>
  );
};

export default WhatToDo;
