import {Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Iplaces, places} from "../mock";
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  searchTerm: string;
  onlyCalifornia: boolean;
  public places: Iplaces[] = places;

  public searchInput({target}: KeyboardEvent): void {
    this.searchTerm = (target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }
  public toggleOnlyCalifornia(event: MatCheckboxChange): void {
    this.onlyCalifornia = event.checked;
    console.log(event.checked);
  }
}
