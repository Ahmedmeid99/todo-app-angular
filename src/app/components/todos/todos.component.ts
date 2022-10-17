import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Learn Node.Js', completed: false },
    { id: 3, text: 'Learn Js', completed: true },
  ];
  constructor() {}

  ngOnInit(): void {}
  // Toggle Tode
  toggleTodo(todo: any) {
    const todoItem = this.todos.find((item: any) => {
      return todo.id === item.id;
    });
    todoItem.completed = !todoItem.completed;
    return [...this.todos, todoItem];
  }
  // Delete Tode
  deleteTodo(todo: any) {
    this.todos = this.todos.filter((item: any) => item.id !== todo.id);
  }
  //Add Todo
  addTodo(todo: {}) {
    this.todos = [...this.todos, todo];
  }
}
