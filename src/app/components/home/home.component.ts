import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from 'src/app/models/pelicula.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas: PeliculaModel[];
  public mouseOver: boolean = false;
  public loading: boolean = true;
  public opcion: string = '';
  public filtro: string = '';

  constructor(  private router: ActivatedRoute,
                private nRoute: Router,
                private pS: PeliculasService ) {

    this.loading = true;

    this.router.params.subscribe( params => {
      this.opcion = (typeof params['opcion'] == 'undefined' ? 'popular' : params['opcion']);
      this.filtro = (typeof params['filtro'] == 'undefined' ? '' : params['filtro']);
      this.getPeliculas();
    });

  }

  updateList( filtro: string = '' ){
    this.filtro = filtro;
    this.nRoute.navigate(['/home',this.opcion,this.filtro]);
  }

  getPeliculas() {

    this.peliculas = [];
    this.loading = true;

    this.pS.getPeliculasHome(this.opcion, this.filtro).subscribe( response => {

      if ( response.hasOwnProperty('results') ) {
        var count = 0;

        for (const peli of response['results'] ) {
          if(count>8) break;
          this.peliculas.push({
            id: peli.id,
            titulo: peli.title,
            descripcion: peli.overview,
            tituloOriginal: peli.original_title,
            popularidad: peli.popularity,
            votos: peli.vote_count,
            votosPromedio: peli.vote_average,
            fechaLanzamiento: peli.release_date,
            poster: peli.poster_path
          });
          count++;
        }

      }

      this.loading = false;

    });

  }

  ngOnInit() {

  }

}
