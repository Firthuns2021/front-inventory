import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard.component";


/** * En éste módulo, montaremos nuestras rutas lazy load */

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule) },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
