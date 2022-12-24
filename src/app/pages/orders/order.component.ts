import { Component, OnInit } from '@angular/core';
import {IOrder} from "../../core/interfaces/order";
import {OrderService} from "../../core/services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders$: Observable<IOrder[]> = this.orderService.getOrders();

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
  }



}
