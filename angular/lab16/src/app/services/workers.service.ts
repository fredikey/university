import { Injectable } from '@angular/core';
import { IWorker } from '../lib';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  private workers: IWorker[] = [];

  constructor(private httpService: HttpService) {}

  public async getWorkers() {
    const data = await this.httpService.get<IWorker[]>('/workers');
    this.workers = data;
    return this.workers;
  }

  public async getWorkerById(id: number | string) {
    const data = await this.httpService.get<IWorker>(`/workers/${id}`);
    return data;
  }

  public async addWorker(data: Omit<IWorker, 'id'>) {
    const worker = await this.httpService.post<IWorker>(`/workers`, data);
    this.workers.push(worker);
  }

  public async deleteWorker(id: number) {
    await this.httpService.delete<IWorker>(`/workers/${id}`);
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  public async editWorker(data: IWorker) {
    await this.httpService.patch<IWorker>(`/workers/${data.id}`, data);
    let idx = this.workers.findIndex((item) => item.id === data.id);
    if (idx !== -1) {
      this.workers[idx] = data;
    }
  }
}
