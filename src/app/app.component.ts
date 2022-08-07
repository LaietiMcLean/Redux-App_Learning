import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
//import { decrement, increment } from './counter/counter.actions';
import * as actions from './counter/counter.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter!: number;

  constructor(public store: Store<AppState>) {
    //Since we have installed the store, we can subscribe now to the actions
    this.store.subscribe((state) => {
      console.log(state);
      this.counter = state.counter;
    });
  }

  increment() {
    this.store.dispatch(actions.increment());
  }
  decrement() {
    this.store.dispatch(actions.decrement());
  }
}
