import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWorker, workerTypeMap } from 'src/app/lib';

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
}
