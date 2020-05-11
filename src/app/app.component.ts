import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}
  nombre: string = 'Carlos Erices Mendez';
  nombre2: string = 'nombre ejemplo capitalizado';
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI: number = Math.PI;
  porcentaje: number = 0.12345;
  salari: number = 1234.5
  hero = {
    nombre: "Iron Man",
    poder: "Dinero",
    diner: {
      monto: "1000000",
    }
  }
  fecha:Date = new Date();
  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve("la promesa se resolvio")
    }, 4500)
  })
}
