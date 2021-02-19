import {Component, Input, OnInit} from '@angular/core'
import {ICard} from '../card/card.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name = ''
  isOnline = true
  // @ts-expect-error (onAddItem is props)
  @Input() onAddItem: (val: Omit<ICard, 'id'>) => void

  get isDisabled () {
    return this.name.trim() === ''
  }

  clear () {
   this.name = ''
   this.isOnline = true
  }

  onSubmit (evt: Event) {
    evt.preventDefault()
    this.onAddItem({name: this.name, isOnline: this.isOnline})
    this.clear()
  }
}
