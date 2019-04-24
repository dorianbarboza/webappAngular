import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import {APP_ROUTING} from"./app.routes";

// Servicios
//import { ArtistasService } from './services/artistas.service';
//import { CancionesService } from './services/canciones.service';
import { GetService } from './services/get.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ArtistaComponent } from './components/artista/artista.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BodyComponent,
    ArtistasComponent,
    FooterComponent,
    CancionesComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,/*R*/
    APP_ROUTING
  ],
  providers: [
  //  ArtistasService,
    //CancionesService,
    GetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
