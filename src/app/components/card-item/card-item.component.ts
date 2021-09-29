import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  @Output() onBuyCard: EventEmitter<Card> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  forSale(): boolean {
    return this.card.price > 0;
  }

  onBuy(card: Card) {
    this.onBuyCard.emit(card);
  }
}
