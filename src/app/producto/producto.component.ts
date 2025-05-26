import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty, EmptyError, isEmpty } from 'rxjs';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
//DEfinir los atributos
producto={
  codigo:"",
  nombre:"",
  descripcion:"",
  existencia:"",
  precio:""
}

//definir las funciones o metodos

guardarProducto(){
/*   if(this.producto.codigo=="" ||
    this.producto.nombre==""|| 
    this.producto.descripcion=="" || 
    this.producto.existencia=="" ||
    this.producto.precio==""){
        alert("Todos los campos deben estar llenos paps")
  } */
 
    if(){
        alert("Todos los campos deben estar llenos paps");
    }else{
     alert("voy a guardar el producto");
    this.limpiar();
  }

}

limpiar(){
  this.producto.codigo="";
  this.producto.descripcion="";
  this.producto.existencia="";
  this.producto.nombre="";
  this.producto.precio="";
}

}
