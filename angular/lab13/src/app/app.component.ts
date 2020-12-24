import { Component } from '@angular/core';
import {
  IWorker,
  WorkersDatabase,
  WorkerType,
} from './lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers = WorkersDatabase;
  workerType = WorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  get uniqueId () {
    return Math.max(...this.workers.map(item => item.id)) + 1
  }

  onAddWorker(worker: Omit<IWorker, 'id'>) {
    this.workers.push({
      ...worker,
      id: this.uniqueId
    });
  }

  onEditWorker(worker: IWorker) {
    let idx = this.workers.findIndex(item => item.id === worker.id)
    if (idx !== -1) {
      this.workers[idx].surname = worker.surname
      this.workers[idx].name = worker.name
      this.workers[idx].name = worker.name
    }
  }
}
