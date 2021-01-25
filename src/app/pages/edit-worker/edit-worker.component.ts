import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../services/workers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IWorker } from '../../lib';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.scss'],
})
export class EditWorkerComponent implements OnInit {
  workerData?: IWorker;

  constructor(
    private workersService: WorkersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.workersService.getWorkerById(params.id).then((data) => {
        this.workerData = data;
      });
    });
  }

  async onSubmit(data: Omit<IWorker, 'id'>) {
    await this.workersService.editWorker({
      id: (this.workerData as IWorker).id,
      ...data,
    });
    this.router.navigate(['workers-list']);
  }
}
