import { Todo } from "@/pages/todo-list/TodoState";

type Props = {
  todo: Todo;

  onCheck: (id: string) => void;
};

export const TodoItem = (props: Props) => {
  const todo = props.todo;

  return (
    <div className="flex justify-center items-center p-1 rounded-lg">
      <input
        type="checkbox"
        onChange={() => {
          props.onCheck(todo.id);
        }}
        className={`checked:text-black focus:ring-0 w-5 h-5 aspect  rounded-md mr-3`}
        checked={todo.finished}
      />
      <p className={`${todo.finished ? "line-through text-gray-500" : ""}`}>
        {todo.content}
      </p>
    </div>
  );
};
