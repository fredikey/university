import {Component, Input} from '@angular/core';

export interface ICard {
  id: number;
  isOnline: boolean;
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // @ts-expect-error (Data is props and always be object)
  @Input() data: ICard;
  // @ts-expect-error (onDelete is component prop)
  @Input() onDelete: (val: number) => void;
}
