import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringpaypageComponent } from './recurringpaypage.component';

describe('RecurringpaypageComponent', () => {
  let component: RecurringpaypageComponent;
  let fixture: ComponentFixture<RecurringpaypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringpaypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringpaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
