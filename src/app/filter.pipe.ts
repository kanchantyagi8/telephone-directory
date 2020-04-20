import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, value: string) {
    // debugger;
    if(!array) return [];
    if(!value) return array;
    let filterItems = [];
    array.forEach(item => {
      // debugger
      if(item.name.toLowerCase().includes(value)) {
        filterItems.push(item);
      }
    });
    return filterItems;
  }

}
