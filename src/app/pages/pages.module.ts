import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactaComponent } from './contacta/contacta.component';
import { MujerComponent } from './mujer/mujer.component';
import { HombreComponent } from './hombre/hombre.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { CestaComponent } from './cesta/cesta.component';
import { HomeComponent } from './home/home.component';
import { UnisexComponent } from './unisex/unisex.component';



@NgModule({
  declarations: [
    ContactaComponent,
    MujerComponent,
    HombreComponent,
    NosotrosComponent,
    NovedadesComponent,
    CestaComponent,
    HomeComponent,
    UnisexComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactaComponent,
    MujerComponent,
    HombreComponent,
    NosotrosComponent,
    NovedadesComponent,
    CestaComponent,
    HomeComponent,
    UnisexComponent
  ]
})
export class PagesModule { }
