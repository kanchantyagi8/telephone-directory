import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonedetailComponent } from './phonedetail.component';

describe('PhonedetailComponent', () => {
  let component: PhonedetailComponent;
  let fixture: ComponentFixture<PhonedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
