import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/Models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodoEvent = new EventEmitter();

  inputText: String = '';

  constructor() {}

  ngOnInit(): void {}

  addOne() {
    const todo = new Todo(
      Math.floor(Math.random() * 1000000),
      this.inputText,
      false
    );
    this.addTodoEvent.emit(todo);
    this.inputText = '';
  }
}
