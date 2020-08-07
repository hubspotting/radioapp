import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {
  admobConfig: AdMobFreeBannerConfig = {
    isTesting: true,
    autoShow: true,
    id: 'ca-app-pub-4784470191644794/8616165159'
  };
  constructor(
    private platform: Platform,
    private admob: AdMobFree
  ) { }

  showAdmobBanner(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.platform.ready().then(async () => {
        await this.admob.banner.config(this.admobConfig);
        await this.admob.banner.prepare().then((res) => {
          resolve(true);
        }).catch(err => {
          reject(false);
        });
      });
    });
  }
}
