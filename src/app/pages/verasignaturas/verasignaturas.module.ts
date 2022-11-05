import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerasignaturasPageRoutingModule } from './verasignaturas-routing.module';

import { VerasignaturasPage } from './verasignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerasignaturasPageRoutingModule
  ],
  declarations: [VerasignaturasPage]
})
export class VerasignaturasPageModule {}
