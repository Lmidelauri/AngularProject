import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService, ProductsService} from "../../../../core/services";
import {IProduct} from "../../../../core/interfaces";

@Component({
  selector: 'app-product-card-details',
  templateUrl: './product-card-details.component.html',
  styleUrls: ['./product-card-details.component.scss']
})
export class ProductCardDetailsComponent implements OnInit {

  productId!: string
  product!: IProduct
  quantity = 1;

  message?: string;

  similarProducts: IProduct[] = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProduct()
    })
  }


  getProduct() {
    this.productService.getOne(this.productId)
      .pipe()
      .subscribe((product) => {
        this.product = product;
        this.getProducts()
      })
  }

  addToCart() {
    this.cartService.addToCart({
      productId: this.productId,
      quantity: this.quantity
    })
      .pipe()
      .subscribe( () => {
        this.message = 'Added to cart'
        setTimeout(() => {
          this.message = undefined
        }, 2000)
      })
  }

  getProducts() {
    this.productService.getProducts({
      limit: 4,
      categoryId: this.product.category.id,
      similar: this.product.id
    })
      .pipe()
      .subscribe((products) => {
        this.similarProducts = products
      })
  }

}
