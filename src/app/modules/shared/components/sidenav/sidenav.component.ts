import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 /** * La pantalla están divididas en media query*/
  mobileQuery: MediaQueryList;
  username: any;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Categorías", route: "category", icon: "category"},
    {name: "Productos", route: "product", icon: "production_quantity_limits"}
  ]
  // private keycloakService: KeycloakService
  constructor(  media: MediaMatcher,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)'); // se le asigna el ancho máximo
  }

  shouldRun = true;

  ngOnInit(): void {
    // this.username = this.keycloakService.getUsername();
  }

  logout(){
    // this.keycloakService.logout();

  }

}
