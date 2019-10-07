import {Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, Output, Input} from '@angular/core';
import {Iplaces, places} from '../mock';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  searchTerm: string;
  onlyCalifornia: boolean;

  @Output()
  public changePlace: EventEmitter<Iplaces> = new EventEmitter<Iplaces>();

  public placeType!: string;
  private _selectedPlace!: Iplaces;
  private _places!: Iplaces[];

  public get selectedPlace(): Iplaces {
    return this._selectedPlace;
  }

  public set selectedPlace(place: Iplaces) {
    this._selectedPlace = place;
    this.changePlace.emit(place);
  }

  public get places(): Iplaces[] {
    return this._places;
  }

  @Input()
  public set places(places: Iplaces[]) {
    this._places = places;

    if (places.length === 0) { 
      return;
    }

    this.selectedPlace = this._places[0];
    this.placeType = this._places[0].type;
  }

  public get loaded(): boolean {
    return this.places.length > 0;
  }

  public changePlaceType(e: Event, type: string): void {
    e.preventDefault();
    this.placeType = type;
  }

  public onPlaceClick(e: Event, place: Iplaces): void {
    e.preventDefault();
    this.selectedPlace = place;
  }



  //                 search methods         //

  public searchInput({target}: KeyboardEvent): void {
    this.searchTerm = (target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }
  public toggleOnlyCalifornia(event: MatCheckboxChange): void {
    this.onlyCalifornia = event.checked;
    console.log(event);
  }
}
