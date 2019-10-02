import {Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Iplaces, places} from "../mock";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  searchTerm: string;
  public places: Iplaces[] = places;

  public searchInput({target}: KeyboardEvent): void {
    this.searchTerm = (target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }
}
