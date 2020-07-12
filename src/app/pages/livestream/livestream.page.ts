import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
