import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent {
  myWorkerType = MyWorkerType;
  name = '';
  surname = '';
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  clear () {
    this.name = ''
    this.surname = ''
    this.type = 0
  }

  onAddWorker() {
    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
    });
    this.clear()
  }

  get isButtonDisabled () {
    return this.name.trim() === '' || this.surname.trim() === ''
  }
}
