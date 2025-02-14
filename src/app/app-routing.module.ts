import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { RelojesComponent } from './pages/relojes/relojes.component';
import { ProductoDetalleComponent } from './pages/relojes/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'contacta', component: ContactaComponent },
  { path: 'relojes', component: RelojesComponent },
  { path: 'relojes/producto/:id', component: ProductoDetalleComponent }, // Ruta dentro de profesionales
  {path: '', redirectTo:'/inicio', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

