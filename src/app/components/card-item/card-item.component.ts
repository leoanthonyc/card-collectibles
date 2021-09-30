import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  @Output() onBuyCard: EventEmitter<Card> = new EventEmitter();

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    if (!this.card) {
      let cardId = this.route.snapshot.params['id'];
      this.cardService.getCard(cardId).subscribe((card) => (this.card = card));
    }
  }

  forSale(): boolean {
    return this.card.price > 0;
  }

  onBuy(card: Card) {
    this.onBuyCard.emit(card);
  }
}
