import { Component } from '@angular/core';
import { IWorker } from '../../lib';
import { WorkersService } from '../../services/workers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss'],
})
export class AddWorkerComponent {
  constructor(private workersService: WorkersService, private router: Router) {}
  async onSubmit(data: Omit<IWorker, 'id'>) {
    await this.workersService.addWorker(data);
    this.router.navigate(['workers-list']);
  }
}
