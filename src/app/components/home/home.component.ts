import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  artistas: any[] = [];
  constructor( private getservices: GetService ) {
    this.getservices.getArtistas()
    .subscribe( (data: any) => {
      console.log(data);
      this.artistas = data;
    })
  }

verArtistas(id_Artista: any) {
  console.log(id_Artista);
}
}
