import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout.component";
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
