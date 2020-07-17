import { Injectable } from '@angular/core';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { MusicControls } from '@ionic-native/music-controls/ngx';
@Injectable({
  providedIn: 'root'
})
export class RadioService {
  stream: MediaObject;
  promise: any;
  constructor(
    private nativeAudio: NativeAudio,
    private backgroundMode: BackgroundMode,
    private streaming: StreamingMedia,
    private media: Media,
    private musicControl: MusicControls
  ) { }

  play(url) {
    return new Promise((resolve) => {
      this.stream = this.media.create(url);
      this.stream.play({
        playAudioWhenScreenIsLocked: true
      })
      resolve(true);
    });
  };

  pause() {
    this.stream.stop();
  }
}
