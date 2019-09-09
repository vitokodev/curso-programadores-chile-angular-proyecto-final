import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-final';

  constructor(public moviesService: PeliculasService) {
    this.moviesService.getPeliculasPopulares().subscribe(response => { console.log(response); });
  }

}
