import { Injectable } from '@angular/core';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  stream: any;
  promise: any;
  constructor(
    private nativeAudio: NativeAudio,
    private backgroudMode: BackgroundMode
  ) { }

  play(url) {
    this.stream = new Audio(url);
    this.backgroudMode.enable();
    this.backgroudMode.on('activate').subscribe((res) => {
      this.stream.play();
      this.stream.volume = 0.5;
    });
    this.stream.play();
    this.promise = new Promise((resolve, reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });
      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });
    return this.promise;
  };

  pause() {
    console.log("Radio is pause");
    this.stream.pause();
  }

  stop() {
    console.log("Radio is STOP");
    this.stream.pause();
    // This stops the stream from downloading
    var temp = this; setTimeout(function () {
      console.log("Stop download");
      temp.stream.src = "about:blank";
      temp.stream.load();
    })

  }
}
