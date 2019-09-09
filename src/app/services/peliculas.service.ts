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

  getPeliculasPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback'); // jsonp para asegurar la petición a otros dominios
  }
}
