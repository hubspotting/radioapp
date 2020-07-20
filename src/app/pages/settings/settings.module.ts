import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings/settings.page';
// components for modal
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { PolicyComponent } from './policy/policy.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [
    SettingsPage,
    AboutComponent,
    PolicyComponent,
    MissionComponent,
    ContactComponent
  ]
})
export class SettingsPageModule {}
