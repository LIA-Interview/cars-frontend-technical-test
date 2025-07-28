export interface ICar {
  id: string,
  carType: string,
  brandId: string,
  model: string,
  registrationDate: Date,
  fuelType: string
}

export interface ICarDetails {
  id: string,
  carType: string,
  brand: {
    "id": string,
    "name": string,
    "foundationDate": Date,
    "ceo": string,
    "countryOfOrigin": string,
    "description": string
  },
  model: string,
  registrationDate: Date,
  fuelType: string,
  "price": number,
  "numberOfDoors": number,
  "power": number,
  "available": boolean
}
