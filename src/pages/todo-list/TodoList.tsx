import { TodoItem } from "@/pages/todo-list/TodoItem";
import { Todo, todosAtom } from "@/pages/todo-list/TodoState";
import { useAtom } from "jotai";

export const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const handleTodoCheck = (id: Todo["id"]) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.finished = !todo.finished;
        }
        return todo;
      });
      return newTodos;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onCheck={handleTodoCheck} />
      ))}
    </div>
  );
};
