import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@Component({
  //Identificador de compoenetes  para hacer utilizado un archivo html
  selector: 'app-root',
  //Invocaion de libreriras o acciones de librerias o componentes a nuestros proyectos  
  imports: [RouterOutlet, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemploD';
}
