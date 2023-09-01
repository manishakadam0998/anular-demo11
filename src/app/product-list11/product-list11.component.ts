import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list11',
  templateUrl: './product-list11.component.html',
  styleUrls: ['./product-list11.component.css']
})
export class ProductList11Component {

  flag:boolean = false;

  selectedIndex!:number;
  isShow:boolean = false ;
  isEditBtn:boolean = false ;
  productObj:Product = new Product();

  constructor(){
    console.log("product-obj",this.productObj);

  }

  productList:Product[] = [
    {productId:1,productName:"Mobile",price:20000},
    {productId:2,productName:"Laptop",price:40000},
    {productId:3,productName:"One Plus ",price:50000},
  ];

  addProduct(){
    this.isShow = true;
    this.isEditBtn = false ;
    this.productObj = new Product();
  }

  hideProduct(){
    this.isShow = false ;
    this.isEditBtn = false ;
  }

 
  
  editData(index:number){
    this.isShow = true;
    this.isEditBtn  = true ;
    this.selectedIndex = index; 

    this.productObj =  {...this.productList[index]};
  }

 
  deleteRecord(index:number){
   this.productList.splice(index,1);
  }

  getData(obj:any){
   console.log("Parent",obj);
   if(this.isEditBtn){
    this.productList[this.selectedIndex] = obj;
   }else {
    obj.productId = this.productList.length + 1;
    this.productList.push(obj);
   }
   this.isEditBtn = false ;
   this.isShow = false ;
  }
}


class Product {
  productId!:number;
  productName!:string;
  price!:number;
}




