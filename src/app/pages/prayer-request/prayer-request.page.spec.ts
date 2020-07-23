import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrayerRequestPage } from './prayer-request.page';

describe('PrayerRequestPage', () => {
  let component: PrayerRequestPage;
  let fixture: ComponentFixture<PrayerRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
