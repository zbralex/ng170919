import {Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Iplaces, places} from "../mock";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  public placesTypes: Iplaces[] = places;
  constructor() { }

  public ngOnInit(): void {

  }

}
