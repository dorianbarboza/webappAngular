import { Injectable } from '@angular/core';

@Injectable()
export class CancionesService{

  private canciones:Cancion[]=[
    {
      nombre_cancion: "Like Toy Soldiers",
      cantante: "Eminem",
      img_cancion: "assets/image/LikeToySoldiers.jpg",
      music: "assets/music/EminemLikeToySoldiers.mp3",
      album: "Encore"
    },
    {
      nombre_cancion: "Whiskey In The Jar",
      cantante: "Metallica",
      img_cancion: "assets/image/metallica1.jpg",
      music: "assets/music/MetallicaWhiskeyInTheJar.mp3",
      album: "Garage Inc."
    },
    {
      nombre_cancion: "Another Brick in the Wall Part 2",
      cantante: "Pink Floyd",
      img_cancion: "assets/image/AnotherBrickintheWall.jpg",
      music: "assets/music/PinkFloydAnotherBrickintheWallPt2.mp3",
      album: "The Wall"
    },
    {
      nombre_cancion: "Polkas Palabras",
      cantante: "Molotov",
      img_cancion: "assets/image/molotov1.jpg",
      music: "assets/music/MolotovPolkasPalabras.mp3",
      album: "Apocalypshit"
    },
    {
      nombre_cancion: "Supermassive Black Hole",
      cantante: "Muse",
      img_cancion: "assets/image/muse1.jpg",
      music: "assets/music/MuseSupermassiveBlackHole.mp3",
      album: "Black Holes and Revelations"
    },
    {
      nombre_cancion: "Riders on the Storm",
      cantante: "The Doors",
      img_cancion: "assets/image/doors1.jpg",
      music: "assets/music/TheDoorsRidersontheStorm.mp3",
      album: "L.A. Woman"
    }
  ];

  constructor(){
    console.log("Servicio listo");
  }

  getCanciones():Cancion[]{
    return this.canciones;
  }
}

export interface Cancion{
  nombre_cancion:string;
  cantante:string;
  img_cancion:string;
  music:string;
  album:string;
}
