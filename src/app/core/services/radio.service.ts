import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  stream: MediaObject;
  promise: any;
  isPlaying = false;
  isPlaying$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private media: Media,
  ) { }

  play(url) {
    return new Promise((resolve) => {
      this.stream = this.media.create(url);
      this.stream.play({
        playAudioWhenScreenIsLocked: true
      });
      this.isPlaying = true;
      this.isPlaying$.next(true);
      resolve(true);
    });
  };

  pause() {
    return new Promise((resolve) => {
      this.isPlaying = false;
      this.isPlaying$.next(false);
      this.stream.stop();
      resolve(true);
    });
  }

  alert() {
    alert('asdflkjasdjflkasdkf');
  }
}
