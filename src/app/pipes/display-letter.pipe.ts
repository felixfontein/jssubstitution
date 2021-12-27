
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'displayLetter'
})
export class DisplayLetterPipe implements PipeTransform {
  transform(value: string | undefined | null, ...args: unknown[]): string {
    if (value === undefined || value === null) {
      return '';
    }
    if (value === ' ') {
      return '␣';
    }
    return value;
  }
}
