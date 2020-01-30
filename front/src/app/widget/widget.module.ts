import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { TimerComponent } from './timer/timer.component';
import { TimeFormatPipe } from './time-format.pipe';



@NgModule({
  declarations: [AutofocusDirective, TimerComponent, TimeFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, TimerComponent]
})
export class WidgetModule { }
