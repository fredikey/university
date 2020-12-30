import {Component, EventEmitter, Output} from '@angular/core'
import {IWorker, WorkerType, workerTypeMap} from '../../lib'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {phoneRegex, phoneMask} from '../../lib/utils'
import {WorkersService} from '../../services/workers.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  phoneMask = phoneMask;
  workerTypeMap = workerTypeMap;
  workerTypeList = Object.keys(workerTypeMap).map(key => Number(key)) as WorkerType[];

  workersService: WorkersService
  router: Router
  constructor(workersService: WorkersService, router: Router) {
    this.workersService = workersService
    this.router = router
  }

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    patronymic: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(phoneRegex)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDay: new FormControl('', Validators.required),
    type: new FormControl(WorkerType.IT)
  });

  onSubmit() {
    this.workersService.addWorker(this.addForm.value)
    this.addForm.reset({phone: '', email: '', name: '', patronymic: '', surname: '', type: WorkerType.IT, birthDay: ''})
    this.router.navigate(['list'])
  }
}
