import { Injectable } from '@angular/core';
import { IProduct } from '../lib';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: IProduct[] = [];

  constructor(private httpService: HttpService) {}

  public async getProducts() {
    const data = await this.httpService.get<IProduct[]>('/products');
    this.products = data;
    return this.products;
  }

  public async getProductById(id: number | string) {
    const data = await this.httpService.get<IProduct>(`/products/${id}`);
    return data;
  }

  public async addProduct(data: Omit<IProduct, 'id'>) {
    const product = await this.httpService.post<IProduct>(`/products`, data);
    this.products.push(product);
  }

  public async deleteProduct(id: number) {
    await this.httpService.delete<IProduct>(`/products/${id}`);
    let index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  public async editProduct(data: IProduct) {
    await this.httpService.patch<IProduct>(`/products/${data.id}`, data);
    let idx = this.products.findIndex((item) => item.id === data.id);
    if (idx !== -1) {
      this.products[idx] = data;
    }
  }

  public async editProductAmount(data: Pick<IProduct, 'id' | 'amount'>) {
    const product = this.products.find(item => item.id === data.id)
    if (product !== undefined) {
      const productShallowCopy = Object.assign({}, product)
      productShallowCopy.amount = data.amount
      await this.editProduct(productShallowCopy)
    }
  }
}
