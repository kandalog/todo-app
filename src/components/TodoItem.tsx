import { Todo } from "@/domain/Todo";

type Props = Todo;

function TodoItem(todo: Props) {
  return (
    <div className="box">
      <p>{todo.title}</p>
    </div>
  );
}

export default TodoItem;
