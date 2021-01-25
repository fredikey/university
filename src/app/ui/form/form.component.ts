import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWorker, WorkerType, workerTypeMap } from '../../lib';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PHONE_MASK, PHONE_REGEX } from './utils';

type WorkerData = Omit<IWorker, 'id'>;
let EMPTY_WORKER: WorkerData = {
  phone: '',
  email: '',
  name: '',
  patronymic: '',
  surname: '',
  type: WorkerType.IT,
  birthDay: '',
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() workerData: WorkerData = EMPTY_WORKER;
  @Input() submitTitle = 'Отправить';

  @Output() submitForm = new EventEmitter<WorkerData>();

  phoneMask = PHONE_MASK;
  workerTypeMap = workerTypeMap;
  workerTypeList = Object.keys(workerTypeMap).map((key) =>
    Number(key)
  ) as WorkerType[];
  form?: FormGroup;

  // init form with props or default data
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.workerData.name, Validators.required),
      surname: new FormControl(this.workerData.surname, Validators.required),
      patronymic: new FormControl(
        this.workerData.patronymic,
        Validators.required
      ),
      phone: new FormControl(this.workerData.phone, [
        Validators.required,
        Validators.pattern(PHONE_REGEX),
      ]),
      email: new FormControl(this.workerData.email, [
        Validators.required,
        Validators.email,
      ]),
      birthDay: new FormControl(this.workerData.birthDay, Validators.required),
      type: new FormControl(this.workerData.type),
    });
  }

  onSubmit() {
    this.submitForm.emit((this.form as FormGroup).value);
    (this.form as FormGroup).reset(EMPTY_WORKER);
  }
}
