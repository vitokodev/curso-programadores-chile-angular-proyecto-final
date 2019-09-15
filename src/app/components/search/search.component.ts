import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PeliculaModel } from 'src/app/models/pelicula.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public loading: boolean;
  public peliculas: PeliculaModel[] = [];
  public buscar: string;

  constructor(private pS: PeliculasService, private router: ActivatedRoute) {

    this.router.params.subscribe( params => {
      if ( params['texto'] ){
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    });

  }

  buscarPelicula() {

    this.peliculas = [];

    if( this.buscar.trim().length == 0) {
      Swal.fire('Busqueda','Debe ingresar un término de búsqueda','warning');
      return;
    }

    this.loading = true;

    this.pS
      .buscarPelicula( this.buscar )
      .subscribe( (response:any) => {

        if ( response.hasOwnProperty('results') ) {

          for (const peli of response['results'] ) {
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
          }
  
        }

        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
