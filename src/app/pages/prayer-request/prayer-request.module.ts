import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerRequestPageRoutingModule } from './prayer-request-routing.module';

import { PrayerRequestPage } from './prayer-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayerRequestPageRoutingModule
  ],
  declarations: [PrayerRequestPage]
})
export class PrayerRequestPageModule {}
