import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';/* Para las peticiones del lado del servidor */

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url="http://localhost:3000/productos";

  constructor(private http:HttpClient) { 

  }
/* 
  guardar(producto:object){
    return this.http.post<any>(this.url,producto);/* los corchete angulares con any es que lo que se que va devolver al servido lo transforme en cualquier cosa */
//  }

guardar(codigo:string,
  nombre:string,
  descripcion:string,
  existencia:string,
  precio:string,
  imagen:File
){
  const fd=new FormData();
  fd.append("codigo",codigo);
  fd.append("nombre", nombre);
  fd.append("descripcion", descripcion);
  fd.append("existencia", existencia);
  fd.append("precio", precio);
  fd.append("imagen", imagen);//formData fd es el unico que se puede llevar un archivo de tipo imagen

  return this.http .post<any>(this.url,fd);
}
  
 consultartodo(){
  return this.http.get<any>(this.url);
 }


}
