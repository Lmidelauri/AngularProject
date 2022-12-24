import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../core/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of, switchMap} from "rxjs";
import {CategoryService} from "../../../../../core/services/category.service";
import {ICategory} from "../../../../../core/interfaces";


@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
 form: FormGroup = new FormGroup ({
   id: new FormControl(''),
   name: new FormControl('', Validators.required),
   price: new FormControl('',Validators.required),
   description: new FormControl('',Validators.required),
   image: new FormControl('',Validators.required),
   categoryId: new FormControl('', Validators.required)
   },

 )
  categories$: Observable<ICategory[]>  = this.categoryService.getAll()

  constructor(
    private categoryService: CategoryService,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.productService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id
        })
      }
    })
  }

 submit() {
   if (this.form.invalid) {
     return
   }

   if (this.form.value.id) {
     this.productService.update(this.form.value.id, this.form.value)
       .pipe()
       .subscribe(res => {
         this.router.navigate(['/content-manager/products'])
           .then(() => {
             this.form.reset()
           })
       })
   } else {
     this.productService.create(this.form.value)
       .pipe()
       .subscribe(res => {
         this.router.navigate(['/content-manager/products'])
           .then(() => {
             this.form.reset()
           })
       })

   }
 }}
