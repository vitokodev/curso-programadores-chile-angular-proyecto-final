import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'movieimg'
})
export class MovieimgPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) {

  }

  transform(value: any[]): any {

    const url = 'https://image.tmdb.org/t/p/w500';

    if( value == null ){
      return this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/noimage.png');
    } else {
      return this.domSanitizer.bypassSecurityTrustResourceUrl( url  + value );
    }

  }

}
