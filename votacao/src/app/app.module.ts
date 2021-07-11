import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { BoothComponent } from './booth/booth.component';
import { VotingCardComponent } from './voting-card/voting-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    BoothComponent,
    VotingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
