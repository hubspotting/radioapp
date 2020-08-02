import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'radio'
    },
    {
      title: 'About Us',
      url: 'about',
      icon: 'person'
    },
    {
      title: 'Mission Statements',
      url: 'mission',
      icon: 'cellular'
    },
    {
      title: 'Request Special Track',
      url: 'trackrequest',
      icon: 'musical-note',
      link: 'https://radiorehoboth.org/requests'
    },
    {
      title: 'Prayer Request',
      url: 'prayerrequest',
      icon: 'hand-left'
    },
    {
      title: 'Request Conselling',
      url: 'conselling',
      icon: 'pricetag',
      link: 'https://radiorehoboth.org/requests'
    },
    {
      title: 'Privacy Policy',
      url: 'policy',
      icon: 'school'
    },
    {
      title: 'Donate',
      url: 'donate',
      icon: 'eyedrop',
      link: 'https://radiorehoboth.org/donate'
    },
    {
      title: 'Contact Us',
      url: 'contact',
      icon: 'paper-plane'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private iab: InAppBrowser
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  async gotoLink(link) {
    const browser = await this.iab.create(link, '_blank');
    browser.show();
  }
}
