import { Component, OnInit } from '@angular/core';
import { RadioService } from './../../core/services/radio.service';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
  styleUrls: ['./livestream.page.scss'],
})
export class LivestreamPage implements OnInit {
  slideOpts = {
    speed: 400,
    slidesPerView: 1.5,
    centeredSlides: true
  };
  streaming = false;
  playing= false;
  constructor(
    private radio: RadioService
  ) { }

  ngOnInit() {
  }

  playAudio() {
    this.streaming = true;
    this.radio.play("https://www.radioking.com/play/test-307").then(() => {
      this.streaming = false;
      this.playing = true;
    });
  }

  pauseAudio() {
    this.playing = false;
    this.radio.pause();
  }

  stop() {
    this.radio.stop();
  }
}
