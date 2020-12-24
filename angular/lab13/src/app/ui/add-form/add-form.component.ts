import { Component, Output, EventEmitter } from '@angular/core';
import { WorkerType, IWorker } from 'src/app/lib';
import {FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  workerType = WorkerType;

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    type: new FormControl(WorkerType.Programmer)
  });

  @Output() addWorker = new EventEmitter<Omit<IWorker, 'id'>>();

  onSubmit() {
    this.addWorker.emit(this.addForm.value);
    this.addForm.reset({name: '', surname: '', type: WorkerType.Programmer})
  }
}
