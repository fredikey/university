import {Component} from '@angular/core'
import {IProduct, productCategoriesList, productCategoryMap, ProductType} from '../../lib'
import {ProductsService} from '../../services/products.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: IProduct[] = [];

  // filter
  amountFilter = true;
  categoryFilter: ProductType | -1 = -1;
  productCategoryMap = productCategoryMap;
  productTypeList = productCategoriesList

  constructor(private productsService: ProductsService, private router: Router) {
    this.productsService.getProducts().then((data) => {
      this.products = data;
    });
  }

  async onDeleteProduct(id: number) {
    await this.productsService.deleteProduct(id);
  }

  onEditProduct(id: number) {
    this.router.navigate(['/edit-product', id]);
  }

  async onEditProductAmount({id, amount}: Pick<IProduct, 'id' | 'amount'>) {
    await this.productsService.editProductAmount({id, amount})
  }
}
