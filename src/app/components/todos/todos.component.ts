import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Learn Node.Js', completed: false },
    { id: 3, text: 'Learn Js', completed: true },
  ];
  constructor() {}

  ngOnInit(): void {}
  // Toggle Tode
  toggleTodo(todo: Todo) {
    const todoItem: any = this.todos.find((item: Todo) => {
      return todo.id === item.id;
    });
    todoItem.completed = !todoItem.completed;
    return [...this.todos, todoItem];
  }
  // Delete Tode
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item: Todo) => item.id !== todo.id);
  }
  //Add Todo
  addTodo(todo: Todo) {
    if (todo.text.trim()) {
      return (this.todos = [...this.todos, todo]);
    }
    return;
  }
}
