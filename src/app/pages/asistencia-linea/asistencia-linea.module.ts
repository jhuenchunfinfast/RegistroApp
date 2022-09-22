import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaLineaPageRoutingModule } from './asistencia-linea-routing.module';

import { AsistenciaLineaPage } from './asistencia-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaLineaPageRoutingModule
  ],
  declarations: [AsistenciaLineaPage]
})
export class AsistenciaLineaPageModule {}
