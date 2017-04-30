import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'trackside'
})
export class TracksidePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(track => track.position.startsWith(args));
  }

}
