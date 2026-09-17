import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTodo: Todo = new Todo()
	todos: Todo[]  = []

	constructor() {
		this.todos.push(new Todo("kutyát sétáltatni"))
		this.todos.push(new Todo("be kell vásárolni a hétvégére", true))
	}

	add() {
		if (this.newTodo.content.startsWith("!")) {
			this.newTodo.done = true
		}

		this.todos.push(this.newTodo)
		this.newTodo = new Todo()

		this.newTodo.reset()
	}

	mark(todo: Todo) {
		todo.done = true
	}
}

export class Todo {
	content: string = ""
	done: boolean = false

	constructor(content: string = "", done: boolean = false) {
		this.content = content
		this.done = done
	}

	reset() {
		this.content = ""
		this.done = false
	}
}
