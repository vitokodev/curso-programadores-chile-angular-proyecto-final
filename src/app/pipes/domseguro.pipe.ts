import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) {

  }

  transform(value: any[]): any {

    const url = 'https://image.tmdb.org/t/p/w500';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url  + value );
  }

}
