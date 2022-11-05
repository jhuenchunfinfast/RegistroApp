import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeralumnosPageRoutingModule } from './veralumnos-routing.module';

import { VeralumnosPage } from './veralumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeralumnosPageRoutingModule
  ],
  declarations: [VeralumnosPage]
})
export class VeralumnosPageModule {}
