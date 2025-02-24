import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactaComponent } from './contacta/contacta.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { CestaComponent } from './cesta/cesta.component';
import { HomeComponent } from './home/home.component';
import { RelojesComponent } from './relojes/relojes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule



@NgModule({
  declarations: [
    ContactaComponent,
    NosotrosComponent,
    NovedadesComponent,
    CestaComponent,
    HomeComponent,
    RelojesComponent,
    HeaderComponent,
    FooterComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule 
  ],
  exports:[
    ContactaComponent,
    NosotrosComponent,
    NovedadesComponent,
    CestaComponent,
    HomeComponent,
    RelojesComponent,
    HeaderComponent,
    FooterComponent,
    ProductoDetalleComponent
 
  ]
})
export class PagesModule { }
