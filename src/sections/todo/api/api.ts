import { Todo } from "./model.ts";

export interface TodoApi {
  listEntries(): Promise<Todo[]>; // GET /entries
  updateEntry(id: number, entry: Partial<Todo>): Promise<void>; // PUT /entries/:id
}

export type { Todo } from "./model.ts";
