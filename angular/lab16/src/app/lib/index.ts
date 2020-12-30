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
  birthDate: number; // timestamp
  phone: string
  type: WorkerType;
}

export let WorkersDatabase: IWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', patronymic: 'Иванов', email: 'oleg@gmail.com', phone: '+7 (912) 782-32-32', birthDate: new Date('10 december 1995').getTime(), type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', patronymic: 'Петров', email: 'oleg@gmail.com', phone: '+7 (912) 782-32-32', birthDate: new Date('10 december 1993').getTime(), type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', patronymic: 'Сидоров', email: 'oleg@gmail.com', phone: '+7 (912) 782-32-32', birthDate: new Date('10 december 1992').getTime(), type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', patronymic: 'Васильев', email: 'oleg@gmail.com', phone: '+7 (912) 782-32-32', birthDate: new Date('10 december 1997').getTime(), type: 3 },
];
