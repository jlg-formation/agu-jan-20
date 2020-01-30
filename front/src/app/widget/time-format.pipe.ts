import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    const seconds = ('' + (value % 60)).padStart(2, '0');
    const minutes = ('' + Math.floor(value / 60)).padStart(2, '0');
    return minutes + ':' + seconds;
  }
}
