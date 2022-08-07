import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements OnInit {
  @Input() counter!: number;

  /*Keep in mind that the Store allows you to know the state stored,
  so thanks to the Store we know the counter value */
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.counter = state.counter;
    });
  }

  ngOnInit(): void {
    this.store.select('counter')
    .subscribe(counter => this.counter = counter);
  }

  multiply() {
    this.store.dispatch(actions.multiply());
  }

  divide() {
    this.store.dispatch(actions.divide());
  }
}
