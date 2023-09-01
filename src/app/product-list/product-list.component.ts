import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  isShow: boolean = false;
  productList: Product[] = [
    { productId: 1, productName: "Moblie", price: 20000 },
    { productId: 2, productName: "Laptop", price: 40000 },
  ]

  productObj: Product = new Product();

  reciveFunction(event:any){
    this.productObj.productId = this.productList.length + 1

  

this.productObj.productName=event.productName
this.productObj.price=event.price

this.productList.push(this.productObj)
this.productObj=new Product()
}
  addProduct() {
    this.isShow = true;
    }

deleteProduct(id:number){
    this.productList = this.productList.filter(item => item.productId !== id);
    console.log(this.productList)
  }
  editProduct(){
    
  }

}
class Product {
  productId!: number;
  productName!: string;
  price!: number;

}


