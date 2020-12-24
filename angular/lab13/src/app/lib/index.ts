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
  type: WorkerType;
}

export let WorkersDatabase: IWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3 },
];
