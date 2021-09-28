import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;

  constructor() {}

  ngOnInit(): void {}

  forSale(): boolean {
    return this.card.price > 0;
  }
}
