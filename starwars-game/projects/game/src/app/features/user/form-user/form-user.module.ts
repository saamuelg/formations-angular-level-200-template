import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanetComponent } from '../list-planet/list-planet.component';
import { FormUserComponent } from './form-user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListPlanetComponent
  ],
  exports: [
    FormUserComponent
  ]
})
export class FormUserModule { }
