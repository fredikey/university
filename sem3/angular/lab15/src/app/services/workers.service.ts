import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
import { IWorker } from '../lib'

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService
  }

  public getWorkers () {
    return this.httpService.get<IWorker[]>('/workers')
  }

  public addWorker (data: IWorker) {
    return this.httpService.post<IWorker>(`/workers`, data)
  }

  public deleteWorker (id: number) {
    return this.httpService.delete<IWorker>(`/workers/${id}`)
  }

  public editWorker (data: IWorker) {
    return this.httpService.patch<IWorker>(`/workers/${data.id}`, data)
  }
}
