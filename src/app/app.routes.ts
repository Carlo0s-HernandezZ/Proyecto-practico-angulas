import { Routes } from '@angular/router';

//lista de componentes
import { InicioComponent } from './inicio/inicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { ProductoComponent } from './producto/producto.component';

//lista de guardias
import { iniciosesionGuard } from './guardias/iniciosesion.guard';


export const routes: Routes = [
    {path:"inicio", component:InicioComponent},
    {path:"directivas", component:DirectivasComponent, canActivate:[iniciosesionGuard]},
    {path:"empleados", component:EmpleadoComponent, canActivate:[iniciosesionGuard]},
    {path:"iniciosesion", component:IniciosesionComponent},
    {path:"producto",component:ProductoComponent, canActivate:[iniciosesionGuard]}
];
