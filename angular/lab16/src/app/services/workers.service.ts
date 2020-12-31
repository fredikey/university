import { Injectable } from '@angular/core';
import { IWorker } from '../lib';

export let workersDatabase: IWorker[] = [
  {
    id: 1,
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванов',
    email: 'oleg@gmail.com',
    phone: '+7 (912) 782-32-32',
    birthDay: '1995-01-10',
    type: 0,
  },
  {
    id: 2,
    name: 'Петр',
    surname: 'Петров',
    patronymic: 'Петров',
    email: 'oleg@gmail.com',
    phone: '+7 (912) 782-32-32',
    birthDay: '1993-01-10',
    type: 1,
  },
  {
    id: 3,
    name: 'Сидор',
    surname: 'Сидоров',
    patronymic: 'Сидоров',
    email: 'oleg@gmail.com',
    phone: '+7 (912) 782-32-32',
    birthDay: '1992-01-10',
    type: 2,
  },
  {
    id: 4,
    name: 'Василий',
    surname: 'Васильев',
    patronymic: 'Васильев',
    email: 'oleg@gmail.com',
    phone: '+7 (912) 782-32-32',
    birthDay: '1997-01-10',
    type: 3,
  },
];

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  private workers: IWorker[] = workersDatabase;

  public getWorkers() {
    return this.workers;
  }

  public getWorkerById(id: number | string) {
    return this.workers.find((item) => item.id === Number(id));
  }

  private getUniqueId() {
    return Math.max(...this.workers.map((item) => item.id)) + 1;
  }
  public addWorker(data: Omit<IWorker, 'id'>) {
    this.workers.push({
      ...data,
      id: this.getUniqueId(),
    });
  }

  public deleteWorker(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  public editWorker(data: IWorker) {
    let idx = this.workers.findIndex((item) => item.id === data.id);
    if (idx !== -1) {
      this.workers[idx] = data;
    }
  }
}
