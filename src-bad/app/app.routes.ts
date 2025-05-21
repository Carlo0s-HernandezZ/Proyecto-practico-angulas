import { Routes } from '@angular/router';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';

export const routes: Routes = [
    {path:"inicio",component:IniciosesionComponent},
    {path:"directivas",component:DirectivasComponent},
    {path:"empleados",component:EmpleadoComponent},
    {path:"iniciosesion",component:IniciosesionComponent}
];
