import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsellingPage } from './conselling.page';

describe('ConsellingPage', () => {
  let component: ConsellingPage;
  let fixture: ComponentFixture<ConsellingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsellingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
