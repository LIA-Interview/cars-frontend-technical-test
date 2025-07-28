import {Component} from '@angular/core';
import {ICar} from '../../shared/model/cars.model';
import {IBrand} from '../../shared/model/brand.model';
import {BrandPipe} from '../../shared/pipes/brand-pipe';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    BrandPipe,
    DatePipe
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  readonly brands: Array<IBrand> = [
    {
      id: "6886a9312112f53cee547086",
      name: "Audi"
    },
    {
      id: "6886a9462112f53cee547087",
      name: "BMW"
    },
    {
      id: "6886a9522112f53cee547088",
      name: "Mercedes-Benz"
    }
  ];
  readonly cars: Array<ICar> = [
    {
      id: "6886aa9c2112f53cee547090",
      carType: "Compact",
      brandId: "6886a9312112f53cee547086",
      model: "A3",
      registrationDate: new Date("2024-06-15"),
      fuelType: "DIESEL"
    },
    {
      id: "6886aa9c2112f53cee547091",
      carType: "Sports Car",
      brandId: "6886a9312112f53cee547086",
      model: "RS e-tron GT",
      registrationDate: new Date("2024-09-20"),
      fuelType: "ELECTRIC"
    },
    {
      id: "6886aacb2112f53cee547092",
      carType: "Sports Car",
      brandId: "6886a9462112f53cee547087",
      model: "M4 Competition",
      registrationDate: new Date("2024-12-01"),
      fuelType: "PETROL"
    },
    {
      id: "6886ac062112f53cee547097",
      carType: "SUV",
      brandId: "6886a9522112f53cee547088",
      model: "EQS 580 4MATIC",
      registrationDate: new Date("2024-12-15"),
      fuelType: "ELECTRIC"
    }
  ];
}
