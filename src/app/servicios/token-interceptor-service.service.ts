/* import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { IniciodesesionService } from './iniciodesesion.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService {

  constructor(private servicioInicioSesion:IniciodesesionService) { }

  intercept(req: HttpRequest<any>, next:HttpHandler){
     const tokenReq = req.clone({
        Authorization :'' + this.servicioInicioSesion.getToken()
     });
     return next.handle(tokenReq);
  }
}
 */

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IniciodesesionService } from './iniciodesesion.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService implements HttpInterceptor {

  constructor(private servicioInicioSesion: IniciodesesionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.servicioInicioSesion.getToken();
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(tokenReq);
  }
}
