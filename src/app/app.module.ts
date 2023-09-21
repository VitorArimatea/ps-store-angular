import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CardLabelComponent } from './components/game-card/card-label/card-label.component';
import { CardPricesComponent } from './components/game-card/card-prices/card-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    NavbarComponent,
    GameCardComponent,
    CardLabelComponent,
    CardPricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
