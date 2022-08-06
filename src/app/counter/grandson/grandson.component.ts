import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.css']
})
export class GrandsonComponent implements OnInit {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.counter = 0;
    this.counterChange.emit(0);
  }

}
