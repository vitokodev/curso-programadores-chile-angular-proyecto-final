import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utiles'
})
export class UtilesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
