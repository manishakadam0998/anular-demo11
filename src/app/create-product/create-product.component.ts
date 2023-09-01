import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  @Input()productObjChild:any;

@Output() sendDataToParent:EventEmitter<any> = new EventEmitter();

  updateProductDetails(){
    this.sendDataToParent.emit(this.productObjChild);
  }
}



