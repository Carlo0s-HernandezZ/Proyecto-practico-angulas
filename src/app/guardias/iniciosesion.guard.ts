import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IniciodesesionService } from '../servicios/iniciodesesion.service';

export const iniciosesionGuard: CanActivateFn = (route, state) => {
  const servicioLogin= inject(IniciodesesionService);
  const router= inject(Router);

  if (servicioLogin.eslogeado()) {
    return true;
    
  }else{
    router.navigate(['/iniciosesion']);
    return false;
  }

  return true;

};
