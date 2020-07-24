import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      title: 'Donate',
      url: 'donate',
      icon: 'eyedrop'
    },
    // {
    //   title: 'Song Lyric',
    //   url: 'lyrics',
    //   icon: 'heart'
    // },
    {
      title: 'Request Special Track',
      url: 'trackrequest',
      icon: 'musical-note'
    },
    {
      title: 'Prayer Request',
      url: 'prayerrequest',
      icon: 'hand-left'
    },
    {
      title: 'Request Conselling',
      url: 'conselling',
      icon: 'pricetag'
    },
    {
      title: 'Contact Us',
      url: 'contact',
      icon: 'paper-plane'
    },
    {
      title: 'Privacy Policy',
      url: 'policy',
      icon: 'school'
    },
    {
      title: 'Mission Statements',
      url: 'mission',
      icon: 'cellular'
    },
    {
      title: 'About Us',
      url: 'about',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
}
