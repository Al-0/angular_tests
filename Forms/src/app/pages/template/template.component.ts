import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/countries.model';
import { CountryResumed } from 'src/app/models/countriesResumed';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name: 'Testy',
    lastName: 'McTest',
    email: 'test@test.mx',
    country: 'MEX',
    gender:'M'
  }
  countries: CountryResumed[] = [];

  constructor(private countryService : CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe(countries =>{
        this.countries = countries;

        this.countries.unshift({
          name: 'Please select a country',
          code: ''
        });
      });
  }

  save(form: NgForm){
    if (form.invalid){
      Object.values(form.controls).forEach(control =>{
        control.markAsTouched();
      });
      return;
    }
    console.log(form)
  }
}
