import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { HeaderComponent } from './ui/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './ui/table/table.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormComponent } from './ui/form/form.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ProductsListComponent,
    HeaderComponent,
    TableComponent,
    AddProductComponent,
    FormComponent,
    EditProductComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
