import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.page.html',
  styleUrls: ['./prayer-request.page.scss'],
})
export class PrayerRequestPage implements OnInit {
  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  duration = 0;
  interval: any;
  playing = false;
  
  files = [];
  constructor(
    private media: Media,
    private file: File,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private androidpermissions: AndroidPermissions
  ) { }

  ngOnInit() {
    
  }

  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }

  ionViewWillEnter() {
    localStorage.clear();
  }

  checkPermission() {
    if (this.platform.is('android')) {
      this.androidpermissions.checkPermission(this.androidpermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then((status) => {
        if (status.hasPermission) {
          this.startRecord();
        } else {
          this.androidpermissions.requestPermission(this.androidpermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
          .then((status) => {
            if (status.hasPermission) {
              this.startRecord();
            } else {

            }
          })
        }
      })
    }
  }

  startRecord() {  
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.documentsDirectory.replace(/^file:\/\//, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
        this.fileName = 'record.mp3';
        this.file.createFile(this.file.externalDataDirectory, this.fileName, true).then((res) => {
          alert(JSON.stringify(res));
          this.filePath = this.file.externalDataDirectory.replace(/^file:\/\//, '') + this.fileName;
          this.audio = this.media.create(this.filePath);
          this.audio.startRecord();
          this.interval = setInterval(() => {
            if (this.duration === 60) {
              this.stopRecord();
              clearInterval(this.interval);
            } else {
              this.duration++;
            }
          }, 1000);
          this.recording = true;
        });
        // this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
        // this.file.createFile( this.file.externalApplicationStorageDirectory , this.fileName , true).then((res) => {
        //   this.duration = 0;
        //   this.interval = setInterval(() => {
        //     if (this.duration === 60) {
        //       this.stopRecord();
        //       clearInterval(this.interval);
        //     } else {
        //       this.duration++;
        //     }
        //   }, 1000);
        //   this.recording = true;
        //   this.filePath = this.file.externalApplicationStorageDirectory.replace(/^file:\/\//, '') + this.fileName;
        //   this.audio = this.media.create(this.filePath);
        //   this.audio.startRecord();
        //   })
        } 
    }
      // this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
      // this.fileName = 'test.mp3';
      // this.filePath = this.file.externalDataDirectory.replace(/file:\/\/\//g, '') + this.fileName;
      // this.filePath = this.file.dataDirectory + this.fileName;
      // alert(JSON.stringify(this.file.resolveDirectoryUrl(this.filePath)));
      // this.filePath = this.file.dataDirectory.replace(/file:\/\/\//g, '') + this.fileName;
      // this.audio = this.media.create(this.filePath);
      // this.audio.startRecord();
      // this.recording = true;

  stopRecord() {
    // this.audio.stopRecord();
    // this.audio.release();
    // let data = { filename: this.fileName, duration: this.duration, filePath: this.filePath };
    // this.audioList.push(data);
    // localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    // this.recording = false;
    // this.getAudioList();
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
    clearInterval(this.interval);
  }


  async playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  shareByEmail(file) {
    const filePath = 'file://' + file;
    this.socialSharing.shareViaEmail('Hi Rehoboth Station', 'Prayer Request', ['host@radiorehoboth.org'], [], [], filePath)
    .then((res) => {
    });
  }

}
