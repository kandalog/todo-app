import { Todo } from "@/domain/Todo";
import { atom } from "jotai";

export const todosAtom = atom<Promise<Todo[]>>(async () => {
  return import("../data.json").then((res) => res.default);
});
