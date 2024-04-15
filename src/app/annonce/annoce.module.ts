import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce.component';
import { ListannonceComponent } from './listannonce/listannonce.component';
import { AnnoceRoutingModule } from './annoce.routing.module';



@NgModule({
  declarations: [ AnnonceComponent,ListannonceComponent],
  imports: [
    CommonModule,
    AnnoceRoutingModule
  ]
})
export class AnnoceModule { }
