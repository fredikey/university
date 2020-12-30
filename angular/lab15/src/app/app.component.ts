import { Component } from '@angular/core';
import {
  IWorker,
  WorkersDatabase,
  WorkerType,
} from './lib';
import {WorkersService} from './services/workers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  workersServices: WorkersService;

  filterName = ''
  filterSurname = ''

  title = 'Список сотрудников';
  workers: IWorker[] = []
  workerType = WorkerType;

  constructor(workersService: WorkersService) {
    this.workersServices = workersService

    this.workersServices.getWorkers().then(data => {
      this.workers = data
    })
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteById(id: number) {
    await this.workersServices.deleteWorker(id)
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  get uniqueId () {
    return Math.max(...this.workers.map(item => item.id)) + 1
  }

  async onAddWorker(worker: Omit<IWorker, 'id'>) {
    const data = await this.workersServices.addWorker({
      ...worker,
      id: this.uniqueId
    })
    this.workers.push(data)
  }

  async onEditWorker(worker: IWorker) {
    await this.workersServices.editWorker(worker)
    let idx = this.workers.findIndex(item => item.id === worker.id)
    if (idx !== -1) {
      this.workers[idx].surname = worker.surname
      this.workers[idx].name = worker.name
      this.workers[idx].phone = worker.phone
    }
  }
}
