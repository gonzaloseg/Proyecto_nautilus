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
import { RelojesComponent } from './relojes/relojes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactaComponent,
    MujerComponent,
    HombreComponent,
    NosotrosComponent,
    NovedadesComponent,
    CestaComponent,
    HomeComponent,
    UnisexComponent,
    RelojesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    

  ],
  exports:[
    ContactaComponent,
    MujerComponent,
    HombreComponent,
    NosotrosComponent,
    NovedadesComponent,
    CestaComponent,
    HomeComponent,
    UnisexComponent,
    RelojesComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class PagesModule { }
