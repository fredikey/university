import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from './pages/info/info.component'
import {ListComponent} from './pages/list/list.component'
import {AddFormComponent} from './pages/add-form/add-form.component'

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'list', component: ListComponent},
  {path: 'add-form', component: AddFormComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
