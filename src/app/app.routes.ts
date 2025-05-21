import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

export const routes: Routes = [
    {path:"inicio", component:InicioComponent},
    {path:"directivas", component:DirectivasComponent},
    {path:"empleados", component:EmpleadoComponent},
    {path:"iniciosesion", component:IniciosesionComponent},
];
