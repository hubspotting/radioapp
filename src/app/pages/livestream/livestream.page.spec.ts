import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivestreamPage } from './livestream.page';

describe('LivestreamPage', () => {
  let component: LivestreamPage;
  let fixture: ComponentFixture<LivestreamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestreamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivestreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
