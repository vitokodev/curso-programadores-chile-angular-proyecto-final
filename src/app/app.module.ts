import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, HttpClientJsonpModule, HttpClientModule
  ],
  providers: [
    // { provide: PeliculasService, useFactory: PeliculasService },
    // { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
