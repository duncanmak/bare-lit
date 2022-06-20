import type { ReactiveControllerHost, ReactiveController } from "lit";
import { TodoApi, Todo } from './api.ts';

export class ApiController implements ReactiveController, TodoApi {
  host: ReactiveControllerHost;
  entries?: Todo[];
  count = 0;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    this.listEntries().then(entries => {
      this.entries = entries;
      this.host.requestUpdate();
    });
  }

  async listEntries(): Promise<Todo[]> {
    if (!this.entries) {
      const resp = await fetch('/assets/todo/db.json');
      this.entries = await resp.json();
      this.count = Math.max(...this.entries!.map(i => i.id));
    }

    return this.entries!;
  }

  async updateEntry(id: number, entry: Partial<Todo>) {
    console.log('Updating', id, 'to', entry);
    if (id == -1)
      id = this.count+1;

    const item = this.entries!.find(i => i.id == id);
    if (item) {
      Object.assign(item, entry);
    } else {
      this.entries!.push({ id, isCompleted: false, text: '', ...entry });
      this.count++;
    }

    this.host.requestUpdate();
  }
}
