import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// components for modal
import { PolicyComponent } from './../policy/policy.component';
import { MissionComponent } from './../mission/mission.component';
import { AboutComponent } from './../about/about.component';
import { ContactComponent } from './../contact/contact.component';
import { stringify } from 'querystring';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }

  async openModal(pageName) {
    let componentName: any;
    switch (pageName) {
      case 'about': {
        componentName = AboutComponent;
        break;
      }
      case 'contact': {
        componentName = ContactComponent;
        break;
      }
      case 'policy': {
        componentName = PolicyComponent;
        break;
      }
      case 'mission': {
        componentName = MissionComponent;
        break;
      }
    }
    const modal = await this.modalCtrl.create({
      component: componentName,
      mode: 'ios'
    })
    return await modal.present();
  }
}
