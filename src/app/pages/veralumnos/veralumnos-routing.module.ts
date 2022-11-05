import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeralumnosPage } from './veralumnos.page';

const routes: Routes = [
  {
    path: '',
    component: VeralumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeralumnosPageRoutingModule {}
