import { Component, OnInit } from '@angular/core';
//import { CancionesService, Cancion } from '../../services/canciones.service';
import { Router } from '@angular/router';
import { GetService } from '../../services/get.service';



@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html'
})
export class CancionesComponent {
  canciones: any[] = [];
  constructor( private getservices: GetService) {
    this.getservices.getCanciones()
    .subscribe( (data: any) => {
      console.log(data);
      this.canciones = data;
    })
  }
/*
  verCanciones(id_Canciones: any) {
  console.log(id_Canciones);

}*/
}
