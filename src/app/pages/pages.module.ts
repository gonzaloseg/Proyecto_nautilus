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
import { TodosComponent } from './relojes/todos/todos.component';
import { ClasicosComponent } from './relojes/clasicos/clasicos.component';
import { ProfesionalesComponent } from './relojes/profesionales/profesionales.component';
import { ProductoDetalleComponent } from './relojes/producto-detalle/producto-detalle.component';



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
    TodosComponent,
    ClasicosComponent,
    ProfesionalesComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
    TodosComponent,
    ClasicosComponent,
    ProfesionalesComponent
  ]
})
export class PagesModule { }
