import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LtcPagePage } from './ltc-page.page';

describe('LtcPagePage', () => {
  let component: LtcPagePage;
  let fixture: ComponentFixture<LtcPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtcPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LtcPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
