import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordActivation'
})
export class PasswordActivationPipe implements PipeTransform {

  transform(value: string, activation: boolean = true): string {
    return activation ? '*'.repeat(value.length) : value;
  }

}
