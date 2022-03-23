import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../interfaces/newReleases';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: Image[], ...args: unknown[]): string {
    if (!images){
      return './assets/img/not-found.jpeg';
    }

    if (images.length === 0){
      return './assets/img/not-found.jpeg';
    }

    return images[0].url;
  }

}
