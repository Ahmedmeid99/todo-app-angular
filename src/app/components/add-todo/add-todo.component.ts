import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
    const todo = {
      id: Math.floor(Math.random() * 1000000),
      text: this.inputText,
      completed: false,
    };
    this.addTodoEvent.emit(todo);
    this.inputText = '';
  }
}
