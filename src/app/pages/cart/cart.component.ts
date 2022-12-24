import { Component, OnInit } from '@angular/core';
import {CartService, OrderService} from "../../core/services";
import {ICart} from "../../core/interfaces/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 cartItems: ICart[]=[];
 cartSum=0
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getCarts()
  }

  getCarts(){
    this.cartService.getCarts()
      .pipe()
      .subscribe( res =>{
        this.cartItems=res
        this.cartSum=this.cartItems.reduce((acc, item)=> {
          return acc + item.total;
        },0)
        }
      )
  }
  removeItem(item: ICart) {
    this.cartService.deleteItem(item.id)
      .pipe()
      .subscribe(() => {
        this.getCarts()
      })
  }


  checkOut() {
 this.orderService.createOrder()
   .pipe()
   .subscribe(res=>{
     this.getCarts()
   })
  }
}
