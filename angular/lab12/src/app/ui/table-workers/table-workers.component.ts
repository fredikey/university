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

  // Feat: Edit worker
  editMode = false
  editedWorker?: MyWorker
  isEditedMode (worker) {
    if (!this.editedWorker) return false
    return this.editedWorker.id === worker.id && this.editMode
  }
  enableEditMode (worker: MyWorker) {
    this.editMode = true
    // shallow copy object
    this.editedWorker = {...worker}
  }
  disableEditMode () {
    this.editMode = false
    this.editedWorker = undefined
  }
  onEditWorker() {
    this.editWorker.emit(this.editedWorker)
    this.disableEditMode()
  }

  get isButtonDisabled () {
    if (!this.editedWorker) return false

    return this.editedWorker.surname.trim() === '' || this.editedWorker.name.trim() === ''
  }
}
