import { Component } from '@angular/core';
import {Iplaces, places} from './mock';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedPlace: Iplaces;
  public places: Iplaces[] = [];
  private _places$: Observable<Iplaces[]> = of(places)
    .pipe(
      delay(1000)
    );

  public constructor() {
    this._places$.subscribe((data: Iplaces[]) => {
      this.places = data;
    });
  }

  public onChangePlace(place: Iplaces) {
    this.selectedPlace = place;
  }
}
