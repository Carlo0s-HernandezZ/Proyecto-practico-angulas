import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty, EmptyError, from, isEmpty } from 'rxjs';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit {//implements sirve para usar una interfaz
//DEfinir los atributos


empleado={
  codigo:"",
  nombre:"",
  apellido:"",
  correo:"",
  puesto:""
}

empleados:any;

constructor(private servicioUsua:EmpleadoService){}
ngOnInit(): void {
  this.verLista();
}

//definir las funciones o metodos

guardarUsuario() {
    if (
      this.empleado.codigo !== "" &&
      this.empleado.nombre !== "" &&
      this.empleado.apellido !== "" &&
      this.empleado.correo !== "" &&
      this.empleado.puesto !== ""
    ) {
      alert("Voy a guardar al empleado");

      this.servicioUsua.guardar(
          this.empleado.codigo,
          this.empleado.nombre,
          this.empleado.apellido,
          this.empleado.correo,
          this.empleado.puesto
        ).subscribe({
          next: (res) => {
            console.log("Empleado guardado:", res);
            alert(res.msj); 
            this.limpiar();
            this.verLista();
            
          },
          error: (err) => {
            console.error("Error al guardar:", err);
            alert("Error al guardar el empleado");
          }
        });
    } else {
      alert("Todos los campos deben de estar llenos");
    }
  }

  verLista() {
    this.servicioUsua.consultartodo().subscribe({
      next: (res) => {
        console.log("Empleados consultados:", res);
        this.empleados = res.usua;
      },
      error: (err) => {
        console.error("Error al consultar empleado:", err);
      }
    });
  }// cierre de ver lista 

consultarProd() {
  this.servicioUsua.consultar(this.empleado.nombre).subscribe(
    res => {
      this.empleado.codigo = res.usuario.codigo;
      this.empleado.nombre = res.usuario.nombre;
      this.empleado.apellido = res.usuario.apellido;
      this.empleado.correo = res.usuario.correo;
      this.empleado.puesto = res.usuario.puesto;
    },
    err => {
      alert("Usuario no encontrado");
      this.empleado.codigo = "";
      this.empleado.apellido = "";
      this.empleado.correo = "";
      this.empleado.puesto = "";
    }
  );
}//cierre de consultar producto

eliminarProd() {
  this.servicioUsua.eliminar(this.empleado.nombre).subscribe(
    res => {
      this.limpiar();
      alert("Producto eliminado");
      this.verLista();
    },
    err => {
      alert("Producto no eliminado");
      
    }
  );
}

modificarProd() {
  this.servicioUsua.modificar(this.empleado).subscribe(
    res => {
      this.limpiar();
      alert("Producto modificado");
      this.verLista();
    },
    err => {
      alert("Error al modificar el producto");
      
    }
  );
}//cierre de modificar


limpiar(){
  this.empleado.codigo="";
  this.empleado.nombre="";
  this.empleado.apellido="";
  this.empleado.correo="";
  this.empleado.puesto="";
}

}
