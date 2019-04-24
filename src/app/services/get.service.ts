import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "http://127.0.0.1/rest/index.php/MusicaWS/";
    console.log('get service listo');
  }

  getArtistas(){
    return this.http.get(this.url+'getartista/');
  }

  getCanciones(){
    return this.http.get(this.url+'getcancion');
  }

  getArtistasById(id_Artista){
    return this.http.get(this.url+'getartistabyid/'+id_Artista);
  }

  deleteArtistas(id_Artista){
    return this.http.get(this.url+'deleteartista/'+id_Artista);
  }
/*
  get_all_canciones(){
    return this.http.get(this.url+'/get_all_canciones');
  }*/
}
