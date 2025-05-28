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
/* Forma correcta para validar 
Se revisan campos vacios*/
/*   if(this.producto.codigo=="" ||
    this.producto.nombre==""|| 
    this.producto.descripcion=="" || 
    this.producto.existencia=="" ||
    this.producto.precio==""){
        alert("Todos los campos deben estar llenos paps")
  }else{
     alert("voy a guardar el producto");
    this.limpiar();
  }*/
 /* SE esta revisando campos llenos, por eso es el diferente a  */
    if(this.producto.codigo !="" &&
      this.producto.descripcion !="" &&
      this.producto.existencia !="" &&
      this.producto.nombre !="" &&
      this.producto.precio !=""
    ){
        alert("voy a guardar el producto");
        this.limpiar();
    }else{
     alert("Todos los campos deben estar llenos paps");
    
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
