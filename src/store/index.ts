import { create } from 'zustand';
import uniqid from 'uniqid';

type State = {
  tasks: {
    id: string;
    text: string;
  }[]
}

type Action = {
  addTask: (text: string) => void
}

const useStore = create<State & Action>((set) => ({
  tasks: [],
  addTask: (text) => set((state) => ({ tasks: [ ...state.tasks, { id: uniqid().toString(), text } ] })),
}));

export default useStore;
