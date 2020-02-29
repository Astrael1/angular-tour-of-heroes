import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { MessageService } from '../../services/message.service';
import {Card} from 'scryfall-sdk';
import { from } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  getCards(): void
  {
    this.message.add('TODO implement getting cards');
  }

  constructor( private cardService: CardService, private message: MessageService) { }

  ngOnInit() {
    this.getCards();
  }

}
