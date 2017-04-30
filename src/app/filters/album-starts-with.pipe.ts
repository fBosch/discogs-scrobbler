import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'albumStartsWith'
})
export class AlbumStartsWithPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(album => album.basic_information.title.toLowerCase().startsWith(args.toLowerCase()));
  }

}
