import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService{

   private url="http://localhost:3000/usuarios";
/*      private url="http://172.16.100.80:3000/usuarios"; 
 */
  constructor(private http:HttpClient) { }

  guardar(
    codigo:string,
    nombre:string,
    apellido:string,
    correo:string,
    puesto:string
  ){
    const fd=new FormData();
    fd.append('codigo', codigo);
    fd.append('nombre', nombre);
    fd.append('apellido', apellido);
    fd.append('correo', correo);
    fd.append('puesto', puesto);

    return this.http .post<any>(this.url,fd);
  }

  consultartodo(){
    return this.http.get<any>(this.url);
  }

  consultar(nombre:String){
    return this.http.get<any>(this.url+"/nombre/"+nombre);
  }

  eliminar(nombre:String){
    return this.http.delete<any>(this.url+"/borrar/"+nombre);
  }

  modificar(empleado:object){
    return this.http.put<any>(this.url,empleado);
  }

}
