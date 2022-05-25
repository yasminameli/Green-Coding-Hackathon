import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

export function formatDate(originalDate: Date, formatStr: string): string {
  if (!originalDate)
    throw new Error('Attempting to format a null or undefined date');
  return format(originalDate, formatStr);
}

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(date: string | undefined): string | undefined {
    if (date) {
      return formatDate(new Date(date), 'dd/MM/yyyy');
    }
    return date;
  }
}
