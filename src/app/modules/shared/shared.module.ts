import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    ConfirmComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
