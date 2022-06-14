const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");

import { Api, TodoApi } from "./api/api.ts";
import { Todo } from "./api/model.ts";

// <todo-app>
//   <todo-view id="1" text="..." isCompleted=true>
//   <todo-view id="2" ...>
//
//   <todo-editor>..</todo-editor>
// </todo-app>
@customElement("todo-app")
export class TodoApp extends LitElement {
  static properties = { items: {} };
  declare items: Todo[];
  declare location: any;

  declare api: TodoApi;

  constructor() {
    super();
    this.items = [];
    this.api = Api;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.items = await this.api.listEntries();
    console.log(this.items);
  }

  render() {
    return html`
            ${
      map(this.items, ({ id, isCompleted, text }) =>
      {
        // console.log({id, isCompleted, text});
        return html`<todo-view todoId=${id} isCompleted=${isCompleted} text=${text}>`
      })}
          <todo-editor>Sample text</todo-editor>
        `;
  }
}

@customElement("todo-view")
export class TodoView extends LitElement {
  static properties = {
    isCompleted: { },
    todoId: { type: Number },
    text: { type: String },
  };

  declare isCompleted: boolean;
  declare todoId: number;
  declare text: string;

  onClick() {
    this.isCompleted = !this.isCompleted;
  }

  render() {
    console.log(`${this.todoId} - ${this.isCompleted}`);
    return html`
      <p>${this.text}</p>
      <p id=${this.todoId} @click=${this.onClick}>${this.isCompleted}</p>
    `;
  }
}

@customElement("todo-editor")
export class TodoEditor extends LitElement {
}

declare global {
  interface HTMLElementTagNameMap {
    "todo-view": TodoView;
    "todo-editor": TodoEditor;
  }
}
