import { Pipe, PipeTransform } from '@angular/core';
import { Iplaces } from './mock';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

 public transform(places: Iplaces[], searchTerm: string, onlyCalifornia: boolean): Iplaces[] {
   let result: Iplaces[] = places;
   if(onlyCalifornia) {
    result = result.filter((place: Iplaces) => place.type === 'California' ? onlyCalifornia : false)
   }
    if (!searchTerm) {
      return result;
    }
    return result.filter((place: Iplaces) => {
      return `${place.type}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
