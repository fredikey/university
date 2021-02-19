import { Component } from '@angular/core';
import { IWorker } from '../../lib';
import { WorkersService } from '../../services/workers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss'],
})
export class WorkersListComponent {
  workers: IWorker[] = [];
  searchString = '';

  constructor(private workersService: WorkersService, private router: Router) {
    this.workersService.getWorkers().then((data) => {
      this.workers = data;
    });
  }

  async onDeleteWorker(id: number) {
    await this.workersService.deleteWorker(id);
  }

  onEditWorker(id: number) {
    this.router.navigate(['/edit-worker', id]);
  }
}
