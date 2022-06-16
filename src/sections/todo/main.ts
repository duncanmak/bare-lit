import { ApiController } from "./api/controller.ts";

const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");
const { when } = await import("lit/directives/when.js?dts");

// <todo-app>
//   <todo-view todo-id="1" text="..." is-completed=true>
//   <todo-view todo-id="2" ...>
//
//   <todo-editor>..</todo-editor>
// </todo-app>
@customElement("todo-app")
export class TodoApp extends LitElement {
  private api = new ApiController(this);

  onUpdate(evt: CustomEvent) {
    this.api.updateEntry(evt.detail.todoId, evt.detail);
  }

  render() {
    return html`
      <h1>My TODOs</h1>

      ${
      map(this.api.entries, ({ id, isCompleted, text }) =>
        html
          `<todo-view @update=${this.onUpdate} todo-id=${id} ?is-completed=${isCompleted} text=${text}>`)
    }
    <todo-editor>Sample text</todo-editor>
    `;
  }
}

@customElement("todo-view")
export class TodoView extends LitElement {
  static properties = {
    isCompleted: { type: Boolean, attribute: "is-completed",  },
    todoId: { type: Number, attribute: "todo-id" },
    text: { type: String },
    isEditing: { type: Boolean, state: true },
  };

  declare isCompleted: boolean;
  declare todoId: number;
  declare text: string;
  declare isEditing: boolean;

  constructor() {
    super();
    this.isCompleted = false;
    this.isEditing = false;
  }

  emitUpdate(todoId?: number, isCompleted?: boolean, text?: string) {
    this.dispatchEvent(
      new CustomEvent("update", {
        bubbles: true,
        composed: true,
        detail: { todoId, isCompleted, text },
      }));
      this.isEditing = false;
  }

  onClick(evt: Event) {
    const { todoId, isCompleted, text } = this;
    this.emitUpdate(todoId, !isCompleted, text);

  }

  onSubmit(e: Event) {
    e.preventDefault();
    const { todoId, isCompleted } = this;
    const input = this.shadowRoot!.querySelector(`#todo-${todoId}`) as HTMLInputElement;
    this.emitUpdate(todoId, isCompleted, input.value);
  }

  render() {
    const label = () =>
      html`<p @click=${() => this.isEditing = true}>${this.text}</p>`;
    const edit = () =>
      html`
      <p>
        <form id="form" @submit=${this.onSubmit}>
          <input id="todo-${this.todoId}" type="text" value="${this.text}">
        </form>
      </p>`;
    return html`
      ${when(this.isEditing, edit, label)}
      <input type="checkbox" @change=${this.onClick} ?checked=${this.isCompleted}>
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
