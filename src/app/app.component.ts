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
      icon: 'mail'
    },
    {
      title: 'Donate',
      url: 'donate',
      icon: 'paper-plane'
    },
    // {
    //   title: 'Song Lyric',
    //   url: 'lyrics',
    //   icon: 'heart'
    // },
    {
      title: 'Request Special Track',
      url: 'trackrequest',
      icon: 'archive'
    },
    {
      title: 'Prayer Request',
      url: 'prayerrequest',
      icon: 'trash'
    },
    {
      title: 'Request Conselling',
      url: 'conselling',
      icon: 'warning'
    },
    {
      title: 'Contact Us',
      url: 'contact',
      icon: 'warning'
    },
    {
      title: 'Privacy Policy',
      url: 'policy',
      icon: 'warning'
    },
    {
      title: 'Mission Statements',
      url: 'mission',
      icon: 'warning'
    },
    {
      title: 'About Us',
      url: 'about',
      icon: 'warning'
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
