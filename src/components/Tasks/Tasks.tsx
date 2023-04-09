'use client';

import useStore from '@/store';
import { get } from '@/utils/object';

const Tasks = () => {
  const tasks = useStore(get('tasks'));

  return (
    <ul>
      {tasks.map(({ id, text }) => {
        return <li key={id}>{text}</li>;
      })}
    </ul>
  );
};

export default Tasks;
