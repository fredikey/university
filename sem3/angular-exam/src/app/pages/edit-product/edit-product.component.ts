import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../lib';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  productData?: IProduct;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productsService.getProductById(params.id).then((data) => {
        this.productData = data;
      });
    });
  }

  async onSubmit(data: Omit<IProduct, 'id'>) {
    await this.productsService.editProduct({
      id: (this.productData as IProduct).id,
      ...data,
    });
    this.router.navigate(['products-list']);
  }
}
