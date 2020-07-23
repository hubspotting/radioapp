import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackRequestPageRoutingModule } from './track-request-routing.module';

import { TrackRequestPage } from './track-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackRequestPageRoutingModule
  ],
  declarations: [TrackRequestPage]
})
export class TrackRequestPageModule {}
