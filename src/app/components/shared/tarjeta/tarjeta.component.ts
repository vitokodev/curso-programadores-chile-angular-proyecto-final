import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PeliculaModel } from '../../../models/pelicula.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() pelicula:PeliculaModel = new PeliculaModel();

  public verDatosVotos: boolean = false;

  constructor(private router: Router) {
    
  }

  verPelicula( pelicula: PeliculaModel ) {
    this.router.navigate(['/pelicula', pelicula.id])
  }

  @HostListener('mouseover')
  onMouseOver(){
    if (!this.verDatosVotos){
      this.verDatosVotos = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    if (this.verDatosVotos){
      this.verDatosVotos = false;
    }
  }

  ngOnInit() {
  }

}
