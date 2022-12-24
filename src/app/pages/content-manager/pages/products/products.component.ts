import { Component, OnInit } from '@angular/core';
import { IProduct} from "../../../../core/interfaces";
import {CategoryService} from "../../../../core/services/category.service";
import {ProductsService} from "../../../../core/services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: IProduct[]=[]
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit()
    : void {
    this.getAll()
  }
  getAll(){

    this.productService.getProducts({})
        .pipe()
      .subscribe(
        res =>{
          this.products=res;
        }
      )
  }

  deleteItem(id:string){
    this.productService.deleteItem(id)
      .pipe()
      .subscribe(
        res=>{
          this.getAll()
        }
      )
  }

}
