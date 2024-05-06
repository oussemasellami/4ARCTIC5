import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app.routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnoceModule } from './annonce/annoce.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import{HttpClientModule} from '@angular/common/http';
import { AppartmentComponent } from './appartment/appartment.component';
import { UpdateappartComponent } from './updateappart/updateappart.component';
import { AddappartComponent } from './addappart/addappart.component';
import { ManipulationComponent } from './manipulation/manipulation.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotfoundComponent,
    FormulaireComponent,
    AppartmentComponent,
    UpdateappartComponent,
    AddappartComponent,
    ManipulationComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnoceModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
