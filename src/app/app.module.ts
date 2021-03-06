// tslint:disable-next-line:import-spacing
import { NgModule }from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { MessagesComponent} from './messages/messages.component';

import { AppRoutingModule} from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CardsComponent,
    CardListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
