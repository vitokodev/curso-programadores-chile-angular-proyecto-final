import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Routes
import { AppRoutingModule } from './app.routes';

//Pipes
import { UtilesPipe } from './pipes/utiles.pipe';
import { MovieimgPipe } from './pipes/movieimg.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarjetaComponent,
    SearchComponent,
    PeliculaComponent,
    FooterComponent,
    NavbarComponent,
    UtilesPipe,
    SearchComponent,
    PeliculaComponent,
    LoadingComponent,
    MovieimgPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule, HttpClientJsonpModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [
    // { provide: PeliculasService, useFactory: PeliculasService },
    // { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
