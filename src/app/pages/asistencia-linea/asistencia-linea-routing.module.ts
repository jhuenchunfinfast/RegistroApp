import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaLineaPage } from './asistencia-linea.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaLineaPageRoutingModule {}

//saber la ruta de la pagina
