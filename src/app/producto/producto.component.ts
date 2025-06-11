import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty, EmptyError, isEmpty } from 'rxjs';
import { ProductoService } from '../servicios/producto.service';

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
  precio:"",
  imgurl:""
}

imagen:any;
productos:any;//variable global, puede consultar cualquier cosa

/* Se crea el metodo especial llamado consrtructor */
constructor(private servicioProd:ProductoService){}

fotoseleccionada(event: any): void{
  if(event.target.file && event.target.file[0]){//revisa qaue si o si sea un archivo
    this.imagen =<File>event.target.files[0];//hace un casteo es una conversion donde se obliga que lo que sea que esta llegando al metodo se transforme a tipo file y se mande a la variable imagen
  }
}//cierre de metodo fotoseleccionada


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

      this.servicioProd.guardar(this.producto.codigo,
        this.producto.descripcion,
        this.producto.nombre,
        this.producto.descripcion,
        this.producto.existencia,
        this.producto.precio,
        this.imagen
      ).subscribe(

        res=>{
        alert("voy a guardar el producto");
        this.limpiar();
        console.log(res);


        },//cierre de res
        err=>{
          alert(err.error.erres[0].msg);//muestra el error en pantalla
          console.log(err.error.erres[0].msg);
        }//cierre de err
      ); //cierre de subcribe
        
        alert("voy a guardar el producto");
        this.limpiar();
    }//cierre de if
    else{
     alert("Todos los  deben estar llenos paps");
    
  }//cierre de else

}//cierre de funcion guardar

verLista(){

  this.productos = this.servicioProd.consultartodo().subscribe(
  res=>{
    console.log(res.msj);
    this.productos = res.pro;
  },
  err=>{
    console.log(err);
  }
  ); //variable llena con un arreglo json
}//Fin de ver Lista

limpiar(){
  this.producto.codigo="";
  this.producto.descripcion="";
  this.producto.existencia="";
  this.producto.nombre="";
  this.producto.precio="";
}

}
