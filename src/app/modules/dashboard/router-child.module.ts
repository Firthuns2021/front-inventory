import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

/** * Este módulo contendrá las rutas hijas a cada componente */

const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'category', component: CategoryComponent },
  // { path: 'product', component: ProductComponent }
]



@NgModule({

  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class RouterChildModule { }
