import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {IProduct, productCategoriesList, productCategoryMap, ProductType} from '../../lib'
import {FormControl, FormGroup, Validators} from '@angular/forms'

type ProductData = Omit<IProduct, 'id'>;
let EMPTY_PRODUCT: ProductData = {
  name: '',
  amount: 0,
  price: 0,
  producer: '',
  category: ProductType.Furniture,
  article: '',
  weight: 0
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() productData: ProductData = EMPTY_PRODUCT;
  @Input() submitTitle = 'Отправить';

  @Output() submitForm = new EventEmitter<ProductData>();

  productCategoryMap = productCategoryMap;
  productTypeList = productCategoriesList
  form?: FormGroup;

  // init form with props or default data
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.productData.name, Validators.required),
      amount: new FormControl(this.productData.amount, [Validators.required, Validators.min(0)]),
      price: new FormControl(this.productData.price, [Validators.required, Validators.min(0)]),
      producer: new FormControl(this.productData.producer),
      category: new FormControl(this.productData.category),
      article: new FormControl(this.productData.article, Validators.required),
      weight: new FormControl(this.productData.weight, [Validators.required, Validators.min(0)]),
    });
  }

  onSubmit() {
    this.submitForm.emit((this.form as FormGroup).value);
    (this.form as FormGroup).reset(EMPTY_PRODUCT);
  }
}
