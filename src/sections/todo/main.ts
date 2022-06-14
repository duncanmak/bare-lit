const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");

const { fastCheckbox, provideFASTDesignSystem } = await import(
  "https://cdn.jsdelivr.net/npm/@microsoft/fast-components@2.16.0/dist/fast-components.min.js"
);

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
    <p>
      ${
      map(this.items, ({ id, isCompleted, text }) =>
        html`<todo-view todoId=${id} isCompleted=${isCompleted} text=${text}>`)
    }
    </p>
        <todo-editor>Sample text</todo-editor>
    `;
  }
}

@customElement("todo-view")
export class TodoView extends LitElement {
  static properties = {
    isCompleted: {},
    todoId: { type: Number },
    text: { type: String },
  };

  declare isCompleted: boolean;
  declare todoId: number;
  declare text: string;

  connectedCallback() {
    super.connectedCallback();

    provideFASTDesignSystem()
      .register(
        fastCheckbox(),
      );
  }

  onClick(evt: Event) {
    console.log(evt);
    this.isCompleted = !this.isCompleted;
  }

  render() {
    return html`
      <p>${this.text}</p>
      <fast-checkbox @change=${this.onClick} .checked=${this.isCompleted}>
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
