import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements OnInit {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  multiply() {
    this.counter *= 2;
    this.counterChange.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.counterChange.emit(this.counter);
  }

  resetGrandson(newCounter: number) {
    this.counter = newCounter;
    this.counterChange.emit(this.counter);
  }
}
