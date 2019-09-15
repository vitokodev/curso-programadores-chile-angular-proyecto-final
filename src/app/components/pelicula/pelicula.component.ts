import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { BoundElementPropertyAst } from '@angular/compiler';
import { PeliculaModel } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public loadingPelicula: boolean;
  public pelicula: any = {};

  constructor(private router: ActivatedRoute, private pS: PeliculasService) {
    
    this.loadingPelicula = true;

    this.router.params.subscribe( params => {
      this.getPelicula( params['id']);
    });

  }

  getPelicula(id: string) {
    this.pS.getPelicula(id).subscribe( peli => {
      // console.log(peli);
      this.pelicula = peli;
      this.loadingPelicula = false;
    })
  }

  ngOnInit() {
  }

}
