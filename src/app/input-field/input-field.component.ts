import { Component, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  productObj: Product = new Product();
  @Input()
  dataRecivedFromParentComp!: string;

  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  addProduct() {
    this.sendData.emit(this.productObj);
    this.productObj = new Product()


  }
}
class Product {
  productName!: string;
  price!: number;
}

