import { Pipe, PipeTransform } from '@angular/core';
import { Iplaces } from './mock';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

 public transform(places: Iplaces[], searchTerm: string): Iplaces[] {
    if (!searchTerm) {
      return places;
    }
    return places.filter((place: Iplaces) => {
      return `${place.address}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
