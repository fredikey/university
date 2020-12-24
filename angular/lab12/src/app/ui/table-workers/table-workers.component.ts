import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<MyWorker>();


  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  editMode = false
  editedName = ''
  editedSurname = ''
  enableEditMode (worker: MyWorker) {
    this.editMode = true
    this.editedName = worker.name
    this.editedSurname = worker.surname
  }
  disableEditMode () {
    this.editMode = false
    this.editedName = ''
    this.editedSurname = ''
  }
  get isButtonDisabled () {
   return this.editedSurname.trim() === '' || this.editedName.trim() === ''
  }
  onEditWorker(worker: MyWorker) {
    this.editWorker.emit({...worker, name: this.editedName, surname: this.editedSurname})
    this.disableEditMode()
  }
}
