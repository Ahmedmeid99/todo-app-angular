import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Learn Node.Js', completed: false },
    { id: 3, text: 'Learn Js', completed: true },
  ];
  constructor() {}

  ngOnInit(): void {}
}
