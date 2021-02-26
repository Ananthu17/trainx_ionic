import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerTrainerPage } from './per-trainer.page';

const routes: Routes = [
  {
    path: '',
    component: PerTrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerTrainerPageRoutingModule {}
