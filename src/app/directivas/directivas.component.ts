import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [FormsModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  //para atributos
  //valor:number =0;
  valor=0;

  edad="";
  puesto="";
  sueldo="";
  genero="";
  nombre="";

  //para funciones

}
