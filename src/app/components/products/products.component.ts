import { Iproducts } from './../../models/iproducts';
import { Component, EventEmitter, OnChanges, Output} from '@angular/core';
import {Icategory} from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Input} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
   products:Iproducts[];
   categories:Icategory[];
  totalOrderPrice:number = 0;
  filteredProducts:Iproducts[];
@Output() onTotalPriceChanged:EventEmitter<number>;
@Input() recievedCatId:number=0;

  constructor(){
    this.products = [
      {id:100,name:"Dell laptop",price:50000,quantity:3,imgUrl:'https://fakeimg.pl/300',catId:1},
      {id:99,name:"lenovo laptop",price:80000,quantity:0,imgUrl:'https://fakeimg.pl/300',catId:1},
      {id:98,name:"samsung laptop",price:60000,quantity:5,imgUrl:'https://fakeimg.pl/300',catId:2},
      {id:97,name:"oop",price:70000,quantity:1,imgUrl:'https://fakeimg.pl/300',catId:2},
      {id:96,name:"HP laptop",price:20000,quantity:3,imgUrl:'https://fakeimg.pl/300',catId:3},
      {id:95,name:"Iphone",price:90000,quantity:7,imgUrl:'https://fakeimg.pl/300',catId:3}
    ]
    this.filteredProducts=this.products;
      this.onTotalPriceChanged=new EventEmitter<number>();

  this.categories=[
    {id:1,name:"Laptop"},
    {id:2,name:"Mobile"},
    {id:3,name:"Tablate"},
  ]
  this.filteredProducts=this.products
}
  ngOnChanges(){
    this.filterProducts()
  }
  buy(count:string ,price:number){
    this.totalOrderPrice+=+count*price;
    this.onTotalPriceChanged.emit(this.totalOrderPrice)
  }

  decreaseQuantity(product: Iproducts) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }



  change(){
    // this.selectedCatId
  }
  trackItem(index:number,item:Iproducts){
    return item.id

  }
  filterProducts(){
    if(this.recievedCatId ==0){
      this.filteredProducts=this.products;
    }else{
      this.filteredProducts=this.products.filter((prd)=>prd.catId==this.recievedCatId)

    }
  }

}








