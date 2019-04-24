import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistasService } from '../../services/artistas.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _artistasService: ArtistasService) {
    this.activatedRoute.params.subscribe(params => {
                this.artista = this._artistasService.getArtista(params['id']);
              })
            }
          }
