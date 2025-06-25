import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IniciodesesionService {


  private url = "http://localhost:3000/clientes/iniciodesesion";
  constructor(private http:HttpClient, private router:Router) { }

  login(usuario:object){
    return this.http.post<any>(this.url,usuario);
  }

  cerrarSesion(){

    //borrar una variable de localstorage
    //localStorage.removeItem("token");

    //borrar todas las variable de localstorage
    localStorage.clear();
    this.router.navigate(['/iniciosesion']);//validar la ruta Carlos no sea wey-------------------------------

  }

  eslogeado():boolean{
    /*     if(localStorage.getItem("token")!=null){ //localstora es una galleta, si existe se inicio sesion, si no no se inicio sesion, la fucion revisa que exista
return true;
    }else{//
      return false;
    } */ //es lo mismo que lo de abajo pero con funcion enangular

    return !!localStorage.getItem("token");// el !! es como si se usara un if else

  }

  tuperfil(){
    //saber cual es el puest del empleado
    //return localStorage.getItem("perfil");//guarda el puesto del empleado

  }
}
