import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerRequestPage } from './prayer-request.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerRequestPageRoutingModule {}
