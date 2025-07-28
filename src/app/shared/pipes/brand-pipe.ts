import {Pipe, PipeTransform} from '@angular/core';
import {IBrand} from '../model/brand.model';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(brandId: string, brands: Array<IBrand>): unknown {
    console.log(brandId);
    return brands.find(brand => brand.id === brandId)?.name || 'Unknown';
  }

}
