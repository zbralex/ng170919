import { Component, Output } from '@angular/core';
import {Iplaces, Iweather, Isocial, places} from './mock';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() weather: Iweather;
  @Output() social: Isocial;
  public places: Iplaces[] = places;

  public drawer: MatSidenav;
  public setSideNav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

}
