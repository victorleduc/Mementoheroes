import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SelectService } from './../select.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-selectplayer',
    templateUrl: './selectplayer.component.html',
    styleUrls: ['./selectplayer.component.css']
})
export class SelectplayerComponent implements OnInit {

    players = [];
    nbrPlayer = 0;
    heroes; // all the heroes
    hero; // hero par rapport a son id
    constructor(private apiService: ApiService, private select: SelectService, private router: Router
    ) { }

    ngOnInit() {
        this.select.players = [];
        this.apiService.getHeroes().subscribe(heroes => {
            // console.log(heroes);
            this.heroes = heroes;
        });
    }
    chooseplayer(index) {
        this.select.players[this.nbrPlayer] = this.heroes[index];
        this.nbrPlayer = this.nbrPlayer + 1;


        // tslint:disable-next-line:triple-equals
        if (this.select.players.length == 2) {
            this.router.navigate(['/game']);
        }

    }

}