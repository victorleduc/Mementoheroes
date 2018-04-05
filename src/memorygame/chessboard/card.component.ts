import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'

import { CARDS } from '../../store/model/card'
import { ICard } from '../../store/interface'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ApiService } from 'api.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() info: ICard

  @Output() flipped = new EventEmitter()

  backCard: ICard
  heroes
  constructor(private apiService: ApiService) {
    this.backCard = CARDS.find(c => c.name === 'back')

  }
  flip(info: ICard) {
    if (info.flipped) {
      return
    }
    this.flipped.emit(info)
  }
  ngOnInit() { }
  /* ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
    this.apiService.getHeroesId(12).subscribe(hero => {
      console.log(hero);

    });

  } */
}
