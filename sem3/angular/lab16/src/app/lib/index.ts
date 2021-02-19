export enum WorkerType {
  IT,
  Sales,
  Delivery,
  Juridical
}

export const workerTypeMap: Record<WorkerType, string> = {
  [WorkerType.IT]: 'IT отдел',
  [WorkerType.Delivery]: 'Отдел доставки',
  [WorkerType.Sales]: 'Отдел продаж',
  [WorkerType.Juridical]: 'Юридический отдел',
}

export interface IWorker {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  birthDay: string;
  phone: string
  type: WorkerType;
}
