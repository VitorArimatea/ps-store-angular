import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  templateUrl: './card-prices.component.html',
  styleUrls: ['./card-prices.component.css']
})
export class CardPricesComponent {
	@Input()
	gamePrice: string = '';
}
