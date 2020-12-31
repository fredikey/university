import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWorker, workerTypeMap } from 'src/app/lib';

type SortKey = 'id' | 'age';
type SortMode = 'up' | 'down';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() workers: IWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<number>();

  workerTypeMap = workerTypeMap;

  getAge(birthday: string) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onEditWorker(id: number) {
    this.editWorker.emit(id);
  }

  // sort
  sortKey?: SortKey = undefined;
  sortMode?: SortMode = 'up';

  onSort(key: SortKey) {
    if (this.sortKey === key) {
      this.sortMode = this.sortMode === 'down' ? 'up' : 'down';
    }
    const getVal = (val: IWorker) =>
      key === 'age' ? new Date(val['birthDay']).getTime() : val[key];
    this.workers.sort((a, b) => {
      let aVal = getVal(a);
      let bVal = getVal(b);

      return this.sortMode === 'up' ? bVal - aVal : aVal - bVal;
    });
    this.sortKey = key;
  }
}
