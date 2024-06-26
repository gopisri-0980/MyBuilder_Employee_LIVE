import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseInvoiceComponent } from './raise-invoice.component';

describe('RaiseInvoiceComponent', () => {
  let component: RaiseInvoiceComponent;
  let fixture: ComponentFixture<RaiseInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
