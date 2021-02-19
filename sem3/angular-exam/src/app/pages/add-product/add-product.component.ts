import { Component } from '@angular/core';
import { IProduct } from '../../lib';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  constructor(private productsService: ProductsService, private router: Router) {}
  async onSubmit(data: Omit<IProduct, 'id'>) {
    await this.productsService.addProduct(data);
    this.router.navigate(['products-list']);
  }
}
