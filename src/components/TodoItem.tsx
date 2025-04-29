import { Todo } from "@/domain/Todo";

type Props = Todo;

function TodoItem(todo: Props) {
  const handleEdit = () => {
    console.log("編集 Click!");
  };

  const handleDelete = () => {
    console.log("削除 click!");
  };

  return (
    <div className="border">
      <div className="flex">
        <p>{todo.title}</p>
        <div>
          <button className="border cursor-pointer" onClick={handleEdit}>
            編集
          </button>
          <button className="ml-2 border cursor-pointer" onClick={handleDelete}>
            削除
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
