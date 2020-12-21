import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  //lista do tipo Photo que inicia vazia
  photos: Photo[] = [];

  /*
    código deixará de funcionar, pois, o photoService so funcionava no constructor
    e será preciso acessar a mesma como propriedade de classe, então, para isso..
    podemos utilizar o private

    e para acessar a(s) propriedade(s) da classe...utilizamos o this.

    o constructor fica destinado a injeção de dependência.

  */

  constructor(

    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos);
    
  }

}
