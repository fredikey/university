import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { WorkersListComponent } from './pages/workers/workers-list.component';
import { HeaderComponent } from './ui/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {TableComponent} from './ui/table/table.component'
import {TextMaskModule} from 'angular2-text-mask';
import { AddWorkerComponent } from './pages/add-worker/add-worker.component'
import {WorkersFilterPipe} from './pipes/workers-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    WorkersListComponent,
    HeaderComponent,
    TableComponent,
    AddWorkerComponent,
    WorkersFilterPipe
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
