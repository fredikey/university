import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct, productCategoryMap } from 'src/app/lib';

type SortKey = 'price' | 'amount';
type SortMode = 'up' | 'down';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() products: IProduct[] = [];

  @Output() deleteProduct = new EventEmitter<number>();
  @Output() editProduct = new EventEmitter<number>();
  @Output() editProductAmount = new EventEmitter<Pick<IProduct, 'id' | 'amount'>>();

  productCategoryMap = productCategoryMap;

  onDeleteProduct(id: number) {
    this.deleteProduct.emit(id);
  }

  onEditProduct(id: number) {
    this.editProduct.emit(id);
  }

  onEditAmount (id: number, amount: number) {
    this.editProductAmount.emit({id, amount})
  }
  // sort
  sortKey?: SortKey = undefined;
  sortMode?: SortMode = 'up';

  onSort(key: SortKey) {
    if (this.sortKey === key) {
      this.sortMode = this.sortMode === 'down' ? 'up' : 'down';
    }
    this.products.sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];

      return this.sortMode === 'up' ? bVal - aVal : aVal - bVal;
    });
    this.sortKey = key;
  }
}
