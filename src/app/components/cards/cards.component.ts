import { Component, OnInit, Output } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService
      .getCards()
      .subscribe((cards) => (this.cards = cards.reverse()));
  }

  buyCard(card: Card) {
    card.price = 0;
    this.cardService.updateCard(card).subscribe();
  }
}
