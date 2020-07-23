import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackRequestPage } from './track-request.page';

describe('TrackRequestPage', () => {
  let component: TrackRequestPage;
  let fixture: ComponentFixture<TrackRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
