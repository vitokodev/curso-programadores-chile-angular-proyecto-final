import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = 'c99b6e7c349802a0998434d8d845ccc1';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient ) {
    // Nothing
  }

  getPeliculasHome(opcion: string, filtro: string = '') {
    let extra = '';
    let sort = '&sort_by=popularity.desc';

    switch (opcion) {
      case 'ninos':
          extra = '&certification.lte=PG&certification.gte=G&certification_country=US';
        break;
      
      case 'teatros':
          extra = '&primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22';
        break;
    
      default:
          extra = '';
        break;
    }

    if( ( typeof filtro == 'undefined' ? 0 : filtro ) > 0 ) {
      extra += `&primary_release_date.gte=${filtro}-01-01&primary_release_date.lte=${filtro}-12-31`;
      sort = '&sort_by=vote_average.desc&vote_count.gte=200';
    }
    
    const url = `${ this.urlMoviedb }/discover/movie/?api_key=${ this.apikey }&language=es${ sort }${ extra }`;
    return this.http.jsonp(url, 'callback');
  }

  getPelicula(id: string){
    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula( termino: string) {
    const url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&language=es&query=${ termino }`;
    return this.http.jsonp(url, 'callback');
  }

}
