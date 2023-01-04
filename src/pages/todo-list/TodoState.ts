import { atom } from "jotai";

export type Todo = {
  id: string;
  content: string;
  finished: boolean;
};
const makeTodo = (): Todo => {
  return {
    id: Math.floor(Math.random() * 1000).toString(),
    content: "Im todo blah blah ",
    finished: false,
  };
};

const initialTodos: Todo[] = Array(10).fill(null).map(makeTodo);
export const todosAtom = atom<Todo[]>(initialTodos);
