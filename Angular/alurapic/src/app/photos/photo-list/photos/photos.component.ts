import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  /*
    o componente photos, vai precisar receber do 'mundo' externo uma lista de fotos do tipo Photo, 
    que será um array e comecará vazio e também para passar um dado para esse componente, será preciso
    que a mesma seja uma inbound propertie
  */
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) {
        this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;

  }

}
