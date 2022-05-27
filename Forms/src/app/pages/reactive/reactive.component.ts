import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private validators: ValidatorsService) {
    this.form = this.createForm();
    this.loadForm();
    this.createListeners();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            this.validators.noSmiths,
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        username: ['', , this.validators.userExists],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
        }),
        hobbies: this.fb.array([]),
      },
      {
        validators: this.validators.samePassword('password', 'confirmPassword'),
      }
    );
  }

  loadForm() {
    this.form.reset({
      name: 'Testy',
      lastName: 'McTest',
      email: 'test@test.com',
      address: {
        street: 'Test avenue',
        city: 'Test city',
      },
    });

    ['Eat', 'Sleep'].forEach((val) =>
      this.hobbies.push(this.fb.control(val, Validators.required))
    );
  }

  createListeners() {
    this.form.valueChanges.subscribe((val) => {
      console.log(val);
    });

    this.form.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.form.get('name')?.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  save() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((innerControl) => {
            innerControl.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }

    this.form.reset({
      name: 'No name',
    });
  }

  addHobbie() {
    this.hobbies.push(this.fb.control('', Validators.required));
  }

  eraseHobbie(index: number) {
    this.hobbies.removeAt(index);
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  get invalidName() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }

  get invalidLastName() {
    return (
      this.form.get('lastName')?.invalid && this.form.get('lastName')?.touched
    );
  }

  get invalidEmail() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get invalidStreet() {
    return (
      this.form.get('address')?.get('street')?.invalid &&
      this.form.get('address')?.get('street')?.touched
    );
  }

  get invalidCity() {
    return (
      this.form.get('address.city')?.invalid &&
      this.form.get('address.city')?.touched
    );
  }

  get invalidPassword() {
    return (
      this.form.get('password')?.invalid && this.form.get('password')?.touched
    );
  }

  get invalidConfirmPassword() {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;
    return (
      (password !== confirmPassword ||
        this.form.get('confirmPassword')?.invalid) &&
      this.form.get('password')?.touched
    );
  }

  get invalidUser() {
    return (
      this.form.get('username')?.invalid && this.form.get('username')?.touched
    );
  }
}
