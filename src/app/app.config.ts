import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter, Routes, withHashLocation} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full',
  },
  {
    path: 'cars',
    loadChildren: async () =>
      (await import('./features/cars/cars.routes'))
        .CARS_ROUTES,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(),
    provideRouter(ROUTES, withHashLocation()),
    provideBrowserGlobalErrorListeners(),
  ],
};
