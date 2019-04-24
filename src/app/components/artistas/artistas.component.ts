import { Component, OnInit } from '@angular/core';
//import { ArtistasService, Artista } from '../../services/artistas.service';
import { Router } from '@angular/router';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html'
})
export class ArtistasComponent {

    artistas: any[] = [];
    constructor( private getservices: GetService) {
      this.getservices.getArtistas()
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas = data;
      })
    }

    verArtistas(id_Artista: any) {
      this.getservices.getArtistasById(id_Artista)
      .subscribe( (data: any)=>{
    console.log("valor de la data: ", data);
  })
}

  eliminarArtistas(id_Artista: any){
    this.getservices.deleteArtistas(id_Artista)
    .subscribe( (data: any)=> {
      console.log(data);
    })
  }



}
