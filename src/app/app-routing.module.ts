import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { WorkersListComponent } from './pages/workers/workers-list.component';
import { AddWorkerComponent } from './pages/add-worker/add-worker.component';
import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'workers-list', component: WorkersListComponent },
  { path: 'add-worker', component: AddWorkerComponent },
  { path: 'edit-worker/:id', component: EditWorkerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
