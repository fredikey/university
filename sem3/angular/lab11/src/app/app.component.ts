import { Component } from '@angular/core';
import {ICard} from './card/card.component';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
let INITIAL_CARDS_COUNT = 10;
const generateCards = () => {
  let res: ICard[] = []
  for (let i = 1; i <= INITIAL_CARDS_COUNT; i++) {
    res.push({
      isOnline: !random(0, 1),
      id: i,
      name: `Generated ${i}`
    })
  }
  return res
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: ICard[] = generateCards();

  get uniqueId () {
    return Math.max(...this.list.map(item => item.id)) + 1
  }

  addItem = ({name, isOnline}: Omit<ICard, 'id'>) => {
    this.list.push({
      name,
      isOnline,
      id: this.uniqueId
    })
  }
  deleteItem = (id: number) =>  {
    const idx = this.list.findIndex(item => item.id === id)
    this.list.splice(idx, 1)
  }
}
