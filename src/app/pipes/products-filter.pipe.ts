import { Pipe, PipeTransform } from '@angular/core';
import {IProduct, ProductType} from '../lib'

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(list: IProduct[], categoryFilter: ProductType | -1, amountFilter: boolean) {
    if (categoryFilter === -1 && amountFilter) return list

    return list.filter(item => {
      // both filters
      if (!amountFilter && categoryFilter !== -1) {
        return item.amount === 0 && item.category === categoryFilter
      }
      // amount filter
      if (!amountFilter) {
        return item.amount === 0
      }
      // category filter
      if (categoryFilter !== -1) {
        return item.category === categoryFilter
      }
    })
  }

}
