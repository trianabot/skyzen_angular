import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCustomerbalanceComponent } from './sales-customerbalance.component';

describe('SalesCustomerbalanceComponent', () => {
  let component: SalesCustomerbalanceComponent;
  let fixture: ComponentFixture<SalesCustomerbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCustomerbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCustomerbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
