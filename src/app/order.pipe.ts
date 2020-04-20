import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(array: Array<any>, value: string) {
    // debugger;
    array.sort((a: string, b:string) => {
      if(a[value] < b[value]) {
        return -1;
      } else if(a[value] > b[value]) {
        return 1;
      } else {
        return 0;
      }
    })
    return array;
  }

}
