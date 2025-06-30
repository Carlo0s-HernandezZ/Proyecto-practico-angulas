import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
/* import { provideHttpClient,HTPP_INTERCEPTORS,withInterceptorsFromDi} from '@angular/common' asi me falla */
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptorServiceService } from './servicios/token-interceptor-service.service';

import { routes } from './app.routes';
/* import { provideHttpClient } from '@angular/common/http'; */
import { from } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    /* provideHttpClient(), */
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorServiceService,
      multi:true
    }
  ]
};
