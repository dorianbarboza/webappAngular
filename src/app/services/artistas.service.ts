import { Injectable } from '@angular/core';

@Injectable()
export class ArtistasService{

  private artistas:Artista[]=[
    {
      nombreArtista: "Metallica",
      biografia: "Es una banda de thrash metal estadounidense que se origina en Los Ángeles, pero con base en San Francisco desde febrero de 1983. Fue fundada en 1981 en Los Ángeles por Lars Ulrich, James Hetfield, Kirk Hammet y Robert Trujillo.",
      img: "assets/image/metallica2.jpg",
      debut: "1981",
      locacion: "Los Angeles, California.",
      imgBanner: "assets/image/metallicaBanner.jpg"
    },
    {
      nombreArtista: "Eminem",
      biografia: "Es un rapero, productor discográfico y actor estadounidense, ha vendido más de 200 millones de álbumes en todo el mundo, convirtiéndose en uno de los raperos con más ventas de la historia y el artista con mayor venta de discos en la década del 2000.",
      img: "assets/image/eminem1.jpg",
      debut: "1988",
      locacion: "Los Angeles, California.",
      imgBanner: "assets/image/eminemBanner.jpg"
    },
    {
      nombreArtista: "Pepe Aguilar",
      biografia: "Es un cantante, compositor, músico, productor y empresario mexicano nacido en Estados Unidos, hijo de dos leyendas de la música y el cine mexicano.",
      img: "assets/image/pepeaguilar1.jpg",
      debut: "1984",
      locacion: "San Antonio, Texas.",
      imgBanner: "assets/image/pepeAguilarBanner.jpg"
    }
  ];
  constructor(){
    console.log("Servicio listo");
  }

  getArtistas():Artista[]{
    return this.artistas;
  }

  getArtista( idx: number){
    return this.artistas[idx];
  }
/*
  buscarArtista(termino : string):Artista[]{
    let artistasArr:Artista[] = [];

    termino = termino.toLoverCase();

    for(let artista of this.artistas){
      let nombreArtista = artista.nombreArtista.toLoverCase();
      if(nombreArtista.indexOf(termino)>=0){
        artistasArr.push(artista)
      }
    }
    return artistasArr;
  }
  */
}

export interface Artista{
  nombreArtista:string;
  biografia:string;
  img:string;
  debut:string;
  locacion:string;
  imgBanner:string;
}
