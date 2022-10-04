import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendmoneyqwalletfinPage } from './sendmoneyqwalletfin.page';

describe('SendmoneyqwalletfinPage', () => {
  let component: SendmoneyqwalletfinPage;
  let fixture: ComponentFixture<SendmoneyqwalletfinPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmoneyqwalletfinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendmoneyqwalletfinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
