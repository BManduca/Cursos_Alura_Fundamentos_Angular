import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    /*
        ao declarar um componente em declarations eles conversam entre si,
        porém, quem importar PhotosModule, para saber quais componentes
        ele terá acesso, é preciso explicitar o no exports
    */
    declarations:[ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent 
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {}