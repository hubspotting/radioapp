import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RadioService } from './../../core/services/radio.service';
import { MusicControlService } from './../../core/services/music-control.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  streaming = false;
  playing = false;
  private unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private radio: RadioService,
    private controlService: MusicControlService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
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
  }

  async playAudio() {
    this.streaming = true;
    this.radio.play().then(() => {
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
    this.controlService.updateIsPlaying(this.playing);
  }
}
