import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { UnisexComponent } from './pages/unisex/unisex.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactaComponent } from './pages/contacta/contacta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'hombre', component: HombreComponent },
  { path: 'mujer', component: MujerComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'unisex', component: UnisexComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'contacta', component: ContactaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

