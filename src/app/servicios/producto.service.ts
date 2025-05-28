import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';/* Para las peticiones del lado del servidor */


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url="http://localhost:3000/";

  constructor(private http:HttpClient) { 

  }

  guardar(producto:object){
    return this.http.post<any>(this.url,producto);/* los corchete angulares con any es que lo que se que va devolver al servido lo transforme en cualquier cosa */
  }
}
