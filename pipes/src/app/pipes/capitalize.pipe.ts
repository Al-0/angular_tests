import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();
    if (all)
    {
      let words = value.split(" ");
      words = words.map(word =>{
        return word[0].toUpperCase() + word.slice(1);
      })
      return words.join(" ");
    }
    else
    {
      return value[0].toUpperCase() + value.slice(1);
    }
  }

}
