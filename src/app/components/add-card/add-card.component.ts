import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  @Output() onAddCard: EventEmitter<Card> = new EventEmitter();

  name!: string;
  owner!: string;
  price!: number;

  constructor() {
    this.price = 0;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Name is required');
      return;
    }

    if (!this.owner) {
      alert('Owner is required');
      return;
    }

    const newCard: Card = {
      name: this.name,
      owner: this.owner,
      price: this.price,
    };

    this.onAddCard.emit(newCard);

    this.name = '';
    this.owner = '';
    this.price = 0;
  }
}
