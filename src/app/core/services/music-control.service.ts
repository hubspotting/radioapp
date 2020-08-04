import { Injectable } from '@angular/core';
import { MusicControls } from '@ionic-native/music-controls/ngx';
import { RadioService } from './radio.service';

@Injectable({
  providedIn: 'root'
})
export class MusicControlService {

  constructor(
    private musicControls: MusicControls,
    private radioService: RadioService
  ) { }

  async createMusicControl() {
    await this.musicControls.create({
      track       : 'Radio Rehoboth',        // optional, default : ''
      cover       : 'https://www.magic933.com/wp-content/uploads/2018/02/1.jpg',      // optional, default : nothing
      // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
      //           or a remote url ('http://...', 'https://...', 'ftp://...')
      isPlaying   : true,                         // optional, default : true
      dismissable : true,                      // optional, default : false
    
      // hide previous/next/close buttons:
      hasPrev   : false,      // show previous button, optional, default: true
      hasNext   : false,      // show next button, optional, default: true
      hasClose  : false,       // show close button, optional, default: false
    
    // iOS only, optional
      album       : 'Absolution',     // optional, default: ''
      duration : 60, // optional, default: 0
      elapsed : 10, // optional, default: 0
      hasSkipForward : false,  // show skip forward button, optional, default: false
      hasSkipBackward : false, // show skip backward button, optional, default: false
      hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional
    
      // Android only, optional
      // text displayed in the status bar when the notification (and the ticker) are updated, optional
      ticker    : 'Now playing "Time is Running Out"',
      // All icons default to their built-in android equivalents
      playIcon: 'media_play',
      pauseIcon: 'media_pause',
      prevIcon: 'media_prev',
      nextIcon: 'media_next',
      closeIcon: 'media_close',
      notificationIcon: 'notification'
    });
    await this.musicControls.subscribe().subscribe(action => {
      // function events(action) {
        const message = JSON.parse(action).message;
            switch(message) {
                case 'music-controls-pause':
                  this.musicControls.updateIsPlaying(false);
                  this.radioService.pause();
                  // this.radioService.alert();
                  break;
                case 'music-controls-play':
                  this.musicControls.updateIsPlaying(true);
                  this.radioService.play();
                  break;
                case 'music-controls-destroy':
                  this.radioService.pause();
                  break;
   
                // External controls (iOS only)
                case 'music-controls-toggle-play-pause' :
                        break;
   
              // Headset events (Android only)
              // All media button events are listed below
              case 'music-controls-media-button' :

                  break;
              case 'music-controls-headset-unplugged':

                  break;
              case 'music-controls-headset-plugged':

                  break;
              default:
                  break;
          }
        
      });
      this.musicControls.listen();
  }

  updateIsPlaying(isPlaying: boolean) {
    this.musicControls.updateIsPlaying(isPlaying);
  }
}
