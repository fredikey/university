import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorkerType, IWorker } from 'src/app/lib';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  myWorkerType = WorkerType;
  name = '';
  surname = '';
  type = 0;

  @Output() addWorker = new EventEmitter<Omit<IWorker, 'id'>>();

  clear () {
    this.name = ''
    this.surname = ''
    this.type = 0
  }

  onAddWorker() {
    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type
    });
    this.clear()
  }

  get isButtonDisabled () {
    return this.name.trim() === '' || this.surname.trim() === ''
  }
}
