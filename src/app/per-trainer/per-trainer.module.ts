import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerTrainerPageRoutingModule } from './per-trainer-routing.module';

import { PerTrainerPage } from './per-trainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerTrainerPageRoutingModule
  ],
  declarations: [PerTrainerPage]
})
export class PerTrainerPageModule {}
