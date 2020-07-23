import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsellingPageRoutingModule } from './conselling-routing.module';

import { ConsellingPage } from './conselling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsellingPageRoutingModule
  ],
  declarations: [ConsellingPage]
})
export class ConsellingPageModule {}
