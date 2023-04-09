import Tasks from '@/components/Tasks';
import Timer from '@/components/Timer';
import WhatToDo from '@/components/WhatToDo';

const Pomodoro = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center mt-10">
      <WhatToDo />
      <Timer />
      <Tasks />
    </main>
  );
};

export default Pomodoro;
