import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { startWith, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  counter$: Observable<number>;
  @Input() counter = 10;

  @Output() dringdring = new EventEmitter<string>();

  constructor() {
    console.log('counter', this.counter);
  }

  ngOnInit() {
    console.log('counter', this.counter);
    this.counter$ = interval(1000)
      .pipe(
        startWith(-1),
        map(n => n + 1),
        map(n => {
           const result = this.counter - n;
           if (result === 0) {
             this.dringdring.emit('it is oooover !!!');
           }
           return result;
        }),
        take(this.counter + 1)
      );

  }
}
