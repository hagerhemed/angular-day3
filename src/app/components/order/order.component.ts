import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories:Icategory[];
  selectedCatId:number=0;
  totalOrderPrice:number = 0;
  recievedTotalPrice:number=0;
  constructor(){
    this.categories=[
      {id:1,name:"Laptop"},
      {id:2,name:"Mobile"},
      {id:3,name:"Tablate"},
    ]}
    calcTotalPrice(top:number){
      this.recievedTotalPrice=top

    }


}
