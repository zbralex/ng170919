import { Component, OnInit, Input } from '@angular/core';
import { Iweather } from '../mock';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
@Input() public weather: Iweather;

}
