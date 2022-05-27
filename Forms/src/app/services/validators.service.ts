import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  noSmiths(control: FormControl): ErrorValidate | null {
    if (control.value?.toLowerCase() === 'smith') {
      return {
        noSmith: true,
      };
    }
    return null;
  }

  samePassword(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ notEqual: true });
      }
    };
  }

  userExists(
    control: FormControl
  ): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> {
    if (!control.value){
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if (control.value === 'TestPerson'){
          resolve({exists: true})
        } else {
          resolve( null );
        }
      }, 3500);
    })
  }
}
