import { create } from 'zustand';
import uniqid from 'uniqid';

type State = {
  init: boolean;
  tasks: {
    id: string;
    text: string;
  }[]
}

type Action = {
  addTask: (text: string) => void;
  setInit: (value: boolean) => void;
}

const useStore = create<State & Action>((set) => ({
  init: false,
  tasks: [],
  addTask: (text) => set((state) => ({ tasks: [ ...state.tasks, { id: uniqid().toString(), text } ] })),
  setInit: (value) => set(() => ({ init: value })),
}));

export default useStore;
