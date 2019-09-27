import { Component } from '@angular/core';
import {Iplaces, places} from "./mock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = {
    text: 'Home Work',
    subtitle: 'some text for subtitle',
    task: 'Places mock'
  };
  public places: Iplaces[] = places;
}
