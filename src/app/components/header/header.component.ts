import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Card Collectibles';

  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }

  toggleAll() {
    console.log('all');
  }
}
