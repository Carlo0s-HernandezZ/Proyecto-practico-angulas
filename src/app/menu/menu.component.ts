import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IniciodesesionService } from '../servicios/iniciodesesion.service';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(public servicioIniSesion:IniciodesesionService){

  }

}
