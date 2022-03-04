import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Chapulin Colorado";
  nombreCholo: string = "eL ZhAVVVHoooo dEl OSSSHhhhhoooo";
  Pi: number = Math.PI;
  percentage: number = 0.234;
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  salary: number = 1234.5;
  currentDay: Date = new Date();
  language: string = "es";
  videoURL: string = "https://www.youtube.com/embed/SV00jQZEFCU";
  password: string = "0918273465";
  passwordActivation: boolean = true;

  promiseValue = new Promise<string>((resolve) =>{
    setTimeout(()=>{
      resolve("Promise is resolved!");
    }, 5000);
  })

  heroe = {
    name: 'Peter',
    codename: 'Spiderman',
    age: '19',
    address:{
      street: 'Daily Boogle',
      number: 777,
    } 
  }
}
