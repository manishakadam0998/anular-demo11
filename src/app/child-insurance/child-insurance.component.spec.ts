import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInsuranceComponent } from './child-insurance.component';

describe('ChildInsuranceComponent', () => {
  let component: ChildInsuranceComponent;
  let fixture: ComponentFixture<ChildInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildInsuranceComponent]
    });
    fixture = TestBed.createComponent(ChildInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
