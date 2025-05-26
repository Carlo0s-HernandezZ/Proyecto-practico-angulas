import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [FormsModule,CommonModule],
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
  frutas=["banana","fresas","Apple","Aguacate"];
  verduras=["Ejote","Zanahoria","Chayote","Papas"];
  cuatri="";
  //para funciones

  producto=[/* Arreglo de tipo json */
   {Nombre:"FITO ",tipo:"MAMIFERO  TERR",raza:"Chihuahua",sexo:"Macho",precio:"500",talla:"CH"},  
   {Nombre:"Lukas",tipo:"Mamifero Terr",raza:"Doberman",sexo:"Macho",precio:"1500",talla:"M"},  
   {Nombre:"Gordo",tipo:"Marino",raza:"Japone",sexo:"Hembra",precio:"50",talla:"CH"},  
   {Nombre:"Petty",tipo:"MamiferoOviparo",raza:"Oviparo",sexo:"Macho",precio:"150000",talla:"M"}  
  ]

}
