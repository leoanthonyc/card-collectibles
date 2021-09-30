import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  @Output() onAddCard: EventEmitter<Card> = new EventEmitter();

  card: Card;
  cardIdParam?: number;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private cardService: CardService
  ) {
    this.card = { name: '', owner: '', price: 0 };
  }

  ngOnInit(): void {
    this.cardIdParam = this.route.snapshot.params['id'];
    if (this.cardIdParam) {
      this.cardService
        .getCard(this.cardIdParam)
        .subscribe((card) => (this.card = card));
    }
  }

  onSubmit(): void {
    if (!this.card.name) {
      alert('Name is required');
      return;
    }

    if (!this.card.owner) {
      alert('Owner is required');
      return;
    }

    this.saveCard(this.card);
  }

  saveCard(card: Card): void {
    if (card.id) {
      this.cardService.updateCard(card).subscribe((card) => (this.card = card));
    } else {
      if (this.cardIdParam) {
        card.id = this.cardIdParam;
      }
      this.cardService.addCard(card).subscribe((card) => (this.card = card));
    }
  }
}
