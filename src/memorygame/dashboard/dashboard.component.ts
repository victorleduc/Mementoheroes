import { Component, OnInit } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

import { ApiService } from 'api.service';
import { SelectService } from 'select.services';

import { Router } from '@angular/router';

import { HomepageComponent } from 'app/homepage.component';

interface Hero {
  id: string;
  name: string;
  images: string;/* 
  powerstats: Powerstats; */
}/* 
interface Powerstats {
  strength: number;
  durability: number;
  power: number;
  combat: number;
} */
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @select() remains$: Observable<number>
  @select() highestSpeed$: Observable<number>
  capacity = '';


  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor(private apiService: ApiService, private select: SelectService, private router: Router) { }

  ngOnInit() {
    this.capacity = '100%';
    console.log(this.select.players);

    if (this.select.players.length !== 2) {
      this.router.navigate(['select']);

    }

    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }
}
