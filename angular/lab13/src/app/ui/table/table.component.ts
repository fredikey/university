import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWorker } from 'src/app/lib';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() title = '';
  @Input() workers: IWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<IWorker>();


  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  // Feat: Edit worker
  editMode = false
  // @ts-expect-error Workaround to suppress error from html template
  editedWorker: IWorker
  isEditedMode (worker: IWorker) {
    if (!this.editedWorker) return false
    return this.editedWorker.id === worker.id && this.editMode
  }
  enableEditMode (worker: IWorker) {
    this.editMode = true
    // shallow copy object
    this.editedWorker = {...worker}
  }
  disableEditMode () {
    this.editMode = false
    // @ts-expect-error
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
