import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.page.html',
  styleUrls: ['./prayer-request.page.scss'],
})
export class PrayerRequestPage implements OnInit, OnDestroy {
  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  duration = 0;
  interval: any;
  playing = false;
  constructor(
    private media: Media,
    private file: File,
    private platform: Platform,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    localStorage.clear();
  }

  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }

  ionViewWillEnter() {
    this.getAudioList();
  }

  startRecord() {
    this.duration = 0;
    if (this.platform.is('ios')) {
      this.fileName = 'Record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
      // this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.filePath = this.file.dataDirectory + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'Record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
      // this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.filePath = this.file.dataDirectory + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
    this.interval = setInterval(() => {
      if (this.duration === 60) {
        this.stopRecord();
        clearInterval(this.interval);
      } else {
        this.duration++;
      }
    }, 1000);
    
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName, duration: this.duration, filePath: this.filePath };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
    clearInterval(this.interval);
  }


  playAudio(filePath) {
    this.audio = this.media.create(filePath);
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  shareByEmail(filePath) { 
    this.socialSharing.shareViaEmail('Hi Rehoboth Station', 'Prayer Request', ['host@radiorehoboth.org'], [], [], filePath)
    .then((res) => {
    });
    
  }

}
