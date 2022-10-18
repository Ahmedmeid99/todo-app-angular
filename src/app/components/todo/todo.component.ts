import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input()
  todo: any;
  @Output()
  toggleEvent = new EventEmitter();
  @Output()
  deleteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggle(todo: Todo) {
    this.toggleEvent.emit(todo);
  }

  delete(todo: Todo) {
    this.deleteEvent.emit(todo);
  }
  // toggle(todo: {}) {
  //   console.log(todo);
  // }
}
