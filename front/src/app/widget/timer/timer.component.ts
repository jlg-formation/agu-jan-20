import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { startWith, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {


  subscription: Subscription;
  myCounter: number;
  @Input() counter = 10;

  @Output() dringdring = new EventEmitter<string>();

  constructor() {
    console.log('counter', this.counter);
  }

  ngOnInit() {

    console.log('counter', this.counter);
    this.subscription = interval(1000)
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
      ).subscribe(data => this.myCounter = data);

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
