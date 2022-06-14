import { Todo } from './model.ts';

export interface TodoApi {
  listEntries(): Promise<Todo[]>;
  // markCompleted(id: number): boolean;
  // addEntry(entry: Todo): number;
}

let store: Todo[] | undefined = undefined;

export const Api: TodoApi = {
  listEntries
}


async function listEntries(): Promise<Todo[]> {
  if (!store) {
    const resp = await fetch('/assets/todo/db.json');
    store = await resp.json();
  }

  return store!;
}
