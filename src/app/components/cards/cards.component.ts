import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];

  constructor(public router: Router, private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards().subscribe((cards) => {
      cards = cards.reverse();
      if (this.router.url.includes('sale')) {
        this.cards = cards.filter((card) => card.price > 0);
      } else if (this.router.url.includes('sold')) {
        this.cards = cards.filter((card) => card.price <= 0);
      } else {
        this.cards = cards;
      }
    });
  }

  buyCard(card: Card): void {
    card.price = 0;
    this.cardService.updateCard(card).subscribe(() => this.getCards());
  }
}
