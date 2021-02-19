export enum WorkerType {
  Programmer,
  Designer,
  Copywriter,
  Manager
}

export interface IWorker {
  id: number;
  name: string;
  surname: string;
  phone: string
  type: WorkerType;
}

export let WorkersDatabase: IWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', phone: '+7 (912) 782-32-32', type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', phone: '+7 (912) 782-32-32', type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', phone: '+7 (912) 782-32-32', type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', phone: '+7 (912) 782-32-32', type: 3 },
];
