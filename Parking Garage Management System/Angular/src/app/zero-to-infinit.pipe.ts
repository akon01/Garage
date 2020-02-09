import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToInfinit'
})
export class ZeroToInfinitPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    if (value == 0) {
      return "No Limit";
    } else {
      return value
    }
  }

}
