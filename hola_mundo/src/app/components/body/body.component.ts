import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'    
})
export class BodyComponent{
    mostrar: boolean = true;

    frase : any = {
       mensaje: "La venganza mata el alma y la envenena",
       autor: "Don Chavo"
    }

    personajes: string[] = ["Señor A", "Doctor B", "Ingeniero C"];
}