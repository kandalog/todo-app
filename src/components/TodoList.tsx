import type { Todo } from "@/domain/Todo";
import TodoItem from "./TodoItem";
import { useAtomValue } from "jotai";
import { todosAtom } from "@/state/atoms";

function TodoList() {
  const todos = useAtomValue(todosAtom);

  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem {...todo} />
      ))}
    </>
  );
}

export default TodoList;
