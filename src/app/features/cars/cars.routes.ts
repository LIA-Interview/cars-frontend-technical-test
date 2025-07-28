import {CarsComponent} from './cars.component';
import {Routes} from '@angular/router';

export const CARS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {path: '', component: CarsComponent},
      {
        path: 'cars',
        children: [],
      },
    ],
  },
];
