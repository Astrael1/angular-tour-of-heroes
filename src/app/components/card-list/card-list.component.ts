import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'scryfall-sdk';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() cards: Card[];

  constructor() { }

  ngOnInit(): void {
  }

}
