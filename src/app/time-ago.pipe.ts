import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): string {
    return moment(date).fromNow();
  }

}
