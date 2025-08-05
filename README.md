# Frontend

You Have a default application already setup. Please ensure that the application build before start.

## Exercises:

0. Explain the architecture of the project and give its advantages
1. Currently, the data displayed in the Cars component are mocked. You will have to update it and retrieve them from the
   API (API information are provided later on)
2. Currently, the filter are not implemented in the cars table. You will have to implement dynamic filters
3. Currently, the details button is not working. Once the user click on the button, he should be redirected to a new
   details screen. This screen should display the details of the car.
4. Add a delete button in order to be able to delete a car
5. Be able to patch the details via reactive form.

Bonus:

1. Create a new menu entry called Brands. This new entry should display a component that display all the brands the way
   you want
2. Use a resolver to retrieve the details used fin the car details screen
3. Update the Brand component in order to display the brands in multiple small cards. To do so, you will have to create
   a reusable Card component that can be used later on as follow:

```html

<card [title]="...">
  <img src="..." alt="..."/>
  <button>See more</button>
</card>
```

3. Implement a brand details screen which is displayed once the user click on the "See more" button

## API Details

### Information

API url: http://37.187.55.36:80/api

Headers:

- X-API-KEY: wRdZsPz5DFk9kn38J0N0knDtO1c2H9tSQXwTdq3tYqY8M4EJbT

### Endpoints:

GET - /api/cars: Get a page of all cars

- params:
  - carType
  - brand (should be the id of the brand to filter on)
  - model
  - registrationDate
  - fuelType

GET - /cars/{id}: get car details

GET - /brands: Get a list of all brands
