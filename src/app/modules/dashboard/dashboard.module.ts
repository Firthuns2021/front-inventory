import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./pages/dashboard.component";
//
import {SharedModule} from "../shared/shared.module";
import {CategoryModule} from "../category/category.module";
import {ProductModule} from "../product/product.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule,

    SharedModule,
    CategoryModule,
    ProductModule,
  ]
})
export class DashboardModule { }
