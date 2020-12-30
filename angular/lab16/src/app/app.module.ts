import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './ui/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {TableComponent} from './ui/table/table.component'
import {AddFormComponent} from './ui/add-form/add-form.component'
import {TextMaskModule} from 'angular2-text-mask'

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ListComponent,
    HeaderComponent,
    TableComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
