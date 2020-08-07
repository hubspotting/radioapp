import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';


@Injectable({
  providedIn: 'root'
})
export class AdmobService {
  admobConfig: AdMobFreeBannerConfig = {
    isTesting: false,
    autoShow: false,
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
        await this.admob.banner.prepare();
        await this.admob.banner.show().then((res) => {

          resolve(true);
        }).catch(err => {

        })
      });
    });
  }
}
