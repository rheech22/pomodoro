'use client';

import useStore from '@/store';
import { get } from '@/utils/object';

const Tasks = () => {
  const tasks = useStore(get('tasks'));

  return (
    <ul className="flex gap-4 mt-20 underline italic font-bold text-purple-400">
      {tasks.map(({ id, text }) => {
        return <li key={id}>{text}</li>;
      })}
    </ul>
  );
};

export default Tasks;
