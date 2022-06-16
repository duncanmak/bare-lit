import { Todo } from './model.ts';

export interface TodoApi {
  listEntries(): Promise<Todo[]>;        // GET /entries
  updateEntry(id: number, entry: Partial<Todo>): Promise<boolean>; // PUT /entries/:id
  addEntry(text: string): Promise<number>;     // POST /entries
}

export type { Todo } from './model.ts';
