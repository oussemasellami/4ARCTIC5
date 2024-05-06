import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { UpdateappartComponent } from './updateappart/updateappart.component';
import { AddappartComponent } from './addappart/addappart.component';
import { ManipulationComponent } from './manipulation/manipulation.component';

const ROUTES:Routes=[
  {path:"",redirectTo:"residence",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"appartment",component:AppartmentComponent},
  {path:"manipulation",component:ManipulationComponent},
  {path:"add",component:AddappartComponent},
  {path:"update/:id",component:UpdateappartComponent},
  {path:"formulaire",component:FormulaireComponent}
 // {path:"**",component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
