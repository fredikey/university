import { Component } from '@angular/core';
import {IWorker} from '../../lib'
import {WorkersService} from '../../services/workers.service'

@Component({
  selector: 'app-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent {
  workers: IWorker[] = []
  searchString = ''

  workersService: WorkersService
  constructor(workersService: WorkersService) {
    this.workersService = workersService
    this.workers = this.workersService.getWorkers()
  }
  async onDeleteById(id: number) {
    this.workersService.deleteWorker(id)
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
