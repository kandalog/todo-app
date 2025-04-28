import type { Todo } from "@/domain/Todo";
import TodoItem from "./TodoItem";

const todos: Todo[] = [
  {
    id: "1",
    title: "sample1",
    completed: false,
  },
  {
    id: "2",
    title: "sample2",
    completed: false,
  },
];

function TodoList() {
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem {...todo} />
      ))}
    </>
  );
}

export default TodoList;
