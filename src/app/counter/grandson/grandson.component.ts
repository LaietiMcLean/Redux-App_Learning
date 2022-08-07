import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.css']
})
export class GrandsonComponent implements OnInit {

  @Input() counter!: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('counter')
    .subscribe(counter => this.counter = counter);
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

}
