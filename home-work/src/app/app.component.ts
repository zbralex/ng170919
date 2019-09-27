import { Component } from '@angular/core';
import {Iplaces, places} from "./mock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Work';
  public places: Iplaces[] = places;
}
