import { Component } from '@angular/core';
import {IWorker} from '../../lib'
import {WorkersService} from '../../services/workers.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  workers: IWorker[] = []
  searchString = ''

  workersService: WorkersService
  constructor(workersService: WorkersService) {
    this.workersService = workersService
    this.workers = this.workersService.getWorkers()
  }
  async onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  async onEditWorker(worker: IWorker) {
    let idx = this.workers.findIndex(item => item.id === worker.id)
    if (idx !== -1) {
      this.workers[idx].surname = worker.surname
      this.workers[idx].name = worker.name
      this.workers[idx].phone = worker.phone
    }
  }
}
