import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
  }

  onEditWorker(worker) {
    let idx = this.workers.findIndex(item => item.id === worker.id)
    if (idx !== -1) {
      this.workers[idx].surname = worker.surname
      this.workers[idx].name = worker.name
      this.workers[idx].name = worker.name
    }
  }
}
