import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(private store: Store<{counter: number}>)  {
    this.counter = 10;
  }

  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
}
