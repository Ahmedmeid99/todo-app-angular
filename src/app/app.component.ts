import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '01-first-project';
  open: Boolean = false;

  openMenue() {
    this.open = true;
  }
  closeMenue() {
    this.open = false;
  }
}
