import { NgModule } from '@angular/core';

import { NewProductComponent } from './new-product/new-product.component';
import {CommonModule} from "@angular/common";
import {ProductComponent} from "./product/product.component";



@NgModule({
  declarations: [
    ProductComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
