import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackRequestPage } from './track-request.page';

const routes: Routes = [
  {
    path: '',
    component: TrackRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRequestPageRoutingModule {}
