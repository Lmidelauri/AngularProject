import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup= new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required)
  })
    // this.checkPassword('password','confirmPassword' ) );


  constructor(
    private authService: AuthService,
    private router:Router
  ) {

  }



  ngOnInit(): void {
  }

  submit(){
      this.form.markAllAsTouched()
      console.log(this.form)
      if (this.form.invalid) return;
      this.authService.register(this.form.value).subscribe( res =>{
         this.router.navigate(['/auth/login'])
          })
  }}
          // error: ({error}) => {
          //   // this.errorMessage = error.error.message
          // }





    // ngOnDestroy(): void{
    //   this.sub$.next(null)
    //   this.sub$.complete()
    // }
    //

