import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInsuranceComponent } from './parent-insurance.component';

describe('ParentInsuranceComponent', () => {
  let component: ParentInsuranceComponent;
  let fixture: ComponentFixture<ParentInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentInsuranceComponent]
    });
    fixture = TestBed.createComponent(ParentInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
