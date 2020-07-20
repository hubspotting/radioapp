import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RadioService } from './../../core/services/radio.service';
import { MusicControlService } from './../../core/services/music-control.service';
import { takeUntil } from 'rxjs/operators';
import { AdmobService } from './../../core/services/admob.service';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
  styleUrls: ['./livestream.page.scss'],
})
export class LivestreamPage implements OnInit, OnDestroy {
  slideOpts = {
    speed: 400,
    slidesPerView: 1.5,
    centeredSlides: true
  };
  streaming = false;
  playing: boolean;
  private unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private radio: RadioService,
    private controlService: MusicControlService,
    private cdr: ChangeDetectorRef,
    private admobService: AdmobService
  ) { }

  ngOnInit() {
    this.admobService.showAdmobBanner().then((res) => {
      
    });
    this.radio.isPlaying$.asObservable()
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((res) => {
      this.playing = res;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    this.admobService.removeBanner();
  }

  async playAudio() {
    this.streaming = true;
    this.radio.play("https://www.radioking.com/play/test-307").then(() => {
      this.streaming = false;
      this.updateIsPlaying();
    });
    await this.controlService.createMusicControl();
  }

  pauseAudio() {
    this.radio.pause().then(() => {
      this.updateIsPlaying();
    });
  }

  updateIsPlaying() {
    this.playing = this.radio.isPlaying;
  }
}
