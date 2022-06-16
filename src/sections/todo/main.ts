import { Todo } from "./api/api.ts";
import { ApiController } from "./api/controller.ts";

const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { repeat } = await import("lit/directives/repeat.js?dts");
const { when } = await import("lit/directives/when.js?dts");

// <todo-app>
//   <todo-view todo-id="1" text="..." is-completed=true>
//   <todo-view todo-id="2" ...>
//
//   <todo-view is-editing>
// </todo-app>
@customElement("todo-app")
export class TodoApp extends LitElement {
  private api = new ApiController(this);

  onUpdate = (evt: CustomEvent) => {
    this.api.updateEntry(evt.detail.todoId, evt.detail);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('todo:update', this.onUpdate);
  }

  disconnectedCallback() {
    this.removeEventListener('todo:update', this.onUpdate);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <h1>My TODOs</h1>

      ${
      repeat(this.api.entries ?? [], (e) => e.id, ({ id, isCompleted, text }) =>
        html
          `<todo-view todo_id=${id} ?is_completed=${isCompleted} text=${text}>`)
    }
    <todo-view is_editing text="Add new entry" todo_id="-1"}>
    `;
  }
}

@customElement("todo-view")
export class TodoView extends LitElement {
  static properties = {
    is_completed: { type: Boolean, default: false  },
    todo_id: { type: Number },
    text: { type: String },
    is_editing: { type: Boolean },
  };
  declare is_completed: boolean;
  declare todo_id: number;
  declare text: string;
  declare is_editing: boolean;

  emitUpdate(todoId?: number, isCompleted?: boolean, text?: string) {
    const detail = { todoId, isCompleted, text };
    console.log('emit', detail);

    this.dispatchEvent(
      new CustomEvent("todo:update", {
        bubbles: true,
        composed: true,
        detail,
      }));
      this.is_editing = false;
  }

  onClick(evt: Event) {
    const { todo_id, is_completed, text } = this;
    this.emitUpdate(todo_id, !is_completed, text);

  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    console.log(evt);
    const { todo_id, is_completed } = this;
    const input = this.shadowRoot!.querySelector<HTMLInputElement>(`#todo-${todo_id}`)!;
    this.emitUpdate(todo_id, is_completed, input.value);
    this.is_editing = false;
  }

  render() {
    const label = () =>
      html`<p @click=${() => this.is_editing = true}>${this.text}</p>`;
    const edit = () =>
      html`
      <p>
        <form id="form" @submit=${this.onSubmit}>
          <input id="todo-${this.todo_id}" type="text" value="${this.text}">
        </form>
      </p>`;
    return html`
      <p>${this.todo_id}</p>
      ${when(this.is_editing, edit, label)}
      <input type="checkbox" @change=${this.onClick} ?checked=${this.is_completed}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "todo-view": TodoView;
  }

  interface HTMLElementEventMap {
    "todo:update": CustomEvent<Todo>
  }
}
