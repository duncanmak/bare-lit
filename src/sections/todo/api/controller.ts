import type { ReactiveControllerHost, ReactiveController } from "lit";

import { TodoApi, Todo } from './api.ts';

export class ApiController implements ReactiveController, TodoApi {
  host: ReactiveControllerHost;
  entries?: Todo[];

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    this.listEntries().then(entries => {
      this.entries = entries;
      this.host.requestUpdate();
    });
  }

  count = 0;

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
    const item = this.entries!.find(i => i.id == id);
    if (!item) return false;

    Object.assign(item, entry);
    this.host.requestUpdate();
    return true;
  }

  async addEntry(text: string) {
    this.entries!.push({id: this.count++, isCompleted: false, text});
    this.host.requestUpdate();
    return this.count;
  }
}
