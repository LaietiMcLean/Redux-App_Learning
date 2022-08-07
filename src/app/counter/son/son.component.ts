import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements OnInit {
  @Input() counter!: number;

  /*Keep in mind that the Store allows you to know the state stored,
  so thanks to the Store we know the counter value */
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('counter')
    .subscribe(counter => this.counter = counter);
  }

  multiply() {
    //this.counter *= 2;
    //this.counterChange.emit(this.counter);
  }

  divide() {
    //this.counter /= 2;
    //this.counterChange.emit(this.counter);
  }
}
