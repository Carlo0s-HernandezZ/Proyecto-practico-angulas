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

/* imagen:any; */
 imagen: any;  
productos:any;//variable global, puede consultar cualquier cosa

/* Se crea el metodo especial llamado consrtructor */
constructor(private servicioProd:ProductoService){}

fotoseleccionada(event: any): void{
  if(event.target.file && event.target.file[0]){//revisa qaue si o si sea un archivo
    this.imagen =<File>event.target.files[0];//hace un casteo es una conversion donde se obliga que lo que sea que esta llegando al metodo se transforme a tipo file y se mande a la variable imagen
    console.log("imagen seleccionada:", this.imagen);
  }
}//cierre de metodo fotoseleccionada


//definir las funciones o metodos

guardarProducto() {
    if (
      this.producto.codigo !== "" &&
      this.producto.nombre !== "" &&
      this.producto.descripcion !== "" &&
      this.producto.existencia !== "" &&
      this.producto.precio !== ""
    ) {
      alert("Voy a guardar el producto");

      this.servicioProd.guardar(
          this.producto.codigo,
          this.producto.nombre,
          this.producto.descripcion,
          this.producto.existencia,
          this.producto.precio,
          this.imagen!
        ).subscribe({
          next: (res) => {
            console.log("Producto guardado:", res);
            alert(res.msj); 
            this.limpiar();
            this.verLista();
          },
          error: (err) => {
            console.error("Error al guardar:", err);
            alert("Error al guardar el producto");
          }
        });
    } else {
      alert("Todos los campos deben de estar llenos");
    }
  }

  verLista() {
    this.servicioProd.consultartodo().subscribe({
      next: (res) => {
        console.log("Productos consultados:", res);
        this.productos = res.pro;
      },
      error: (err) => {
        console.error("Error al consultar productos:", err);
      }
    });
  }// cierre de ver lista 

  consultarProd(){
    this.servicioProd.consultar(this.producto.nombre).subscribe(
      res=>{
        this.producto.codigo=res.producto.codigo;
        this.producto.nombre=res.producto.nombre;
        this.producto.descripcion=res.producto.descripcion;
        this.producto.existencia=res.producto.existencia;
        this.producto.precio=res.producto.precio;
        this.producto.imgurl=res.producto.imgurl;
      },
      err=>{
        alert("producto no encontrado");
        this.producto.codigo="";
        this.producto.descripcion="";
        this.producto.existencia="";
        this.producto.precio="";
        this.producto.imgurl="";
      }
    )
  }//cierre de consultar producto

eliminarProd() {
  this.servicioProd.eliminar(this.producto.nombre).subscribe(
    res => {
      this.limpiar();
      alert("Producto eliminado");
    },
    err => {
      alert("Producto no eliminado");
    }
  );
}

modificarProd() {
  this.servicioProd.modificar(this.producto).subscribe(
    res => {
      this.limpiar();
      alert("Producto modificado");
    },
    err => {
      alert("Error al modificar el producto");
    }
  );
}//cierre de modificar

modificarImagen(){
  this.servicioProd.modificarimagen(this.imagen).subscribe(
    res=>{
      alert("Imagen modificad");
      this.limpiar();
    },
    err=>{
      alert("Error al moficar");
    }
  );
}//cierre de moficar imagen

limpiar(){
  this.producto.codigo="";
  this.producto.descripcion="";
  this.producto.existencia="";
  this.producto.nombre="";
  this.producto.precio="";
   this.imagen = null;
}

}
