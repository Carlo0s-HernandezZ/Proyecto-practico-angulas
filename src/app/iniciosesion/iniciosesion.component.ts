import { Component } from '@angular/core';
import { IniciodesesionService } from '../servicios/iniciodesesion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  imports: [FormsModule],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css',
})
export class IniciosesionComponent {

  usuario={
    email:"",
    password:""
  }

  constructor(private servicioIniciosesion:IniciodesesionService
              ,private router:Router
  ){}
  
  login(){
    this.servicioIniciosesion.login(this.usuario).subscribe(
      res=>{
        localStorage.setItem("token", res.jwtoken);
        alert(res.msj);
        this.router.navigate(['/inicio']);
      },
      err=>{
        alert(err);
      }
    );
  }

}
