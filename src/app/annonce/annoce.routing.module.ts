import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { ListannonceComponent } from './listannonce/listannonce.component';

const ROUTES:Routes=[
  {path:"annonce",component:AnnonceComponent,
  children:[
    {path:"list",component:ListannonceComponent}
  ]

}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule]
})
export class AnnoceRoutingModule { }
