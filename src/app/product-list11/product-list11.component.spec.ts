import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList11Component } from './product-list11.component';

describe('ProductList11Component', () => {
  let component: ProductList11Component;
  let fixture: ComponentFixture<ProductList11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductList11Component]
    });
    fixture = TestBed.createComponent(ProductList11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
