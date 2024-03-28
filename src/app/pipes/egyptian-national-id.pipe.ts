import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianNationalId',
  standalone: true
})
export class EgyptianNationalIdPipe implements PipeTransform {
  transform(id: string, datePart: string): string {
    const year = id.substring(1, 2);
    const month = id.substring(3, 2);
    const day = id.substring(5, 2);

    if (datePart === 'YY') {
      return year;
    } else if (datePart === 'MM') {
      return month;
    } else if (datePart === 'DD') {
      return day;
    } else if (datePart === 'FullDate') {
      const formattedDate = `${day}-${month}-${year}`;
      return formattedDate;
    }

    return '';
  }

}
