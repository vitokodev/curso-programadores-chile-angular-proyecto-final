import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pS: PeliculasService, private router: Router) {  }

  buscarPelicula( termino: string ) {

    if( termino.trim().length == 0) {
      Swal.fire('Busqueda','Debe ingresar un término de búsqueda','warning');
      return;
    }

    this.router.navigate(['/search',termino]);

  }

  ngOnInit() {
  }

}
