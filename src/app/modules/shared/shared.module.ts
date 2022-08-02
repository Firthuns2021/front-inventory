import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MaterialModule} from "../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ConfirmComponent,
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,

  ]
})
export class SharedModule { }
