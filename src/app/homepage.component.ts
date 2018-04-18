import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SelectService } from '../select.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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
        // this.select.players[this.nbrPlayer].selected = true;
        this.select.players[this.nbrPlayer] = this.heroes[index];
        if (document.getElementById('heroCard' + index).style.opacity === '0.5') {
            return false;
        }
        this.select.players[this.nbrPlayer].life = 100;
        this.nbrPlayer = this.nbrPlayer + 1;


        // tslint:disable-next-line:triple-equals
        if (this.select.players.length == 2) {
            this.router.navigate(['/memory']);
        }
        document.getElementById('heroCard' + index).style.opacity = '0.5';
        document.getElementById('heroCard' + index).style.filter = 'grayscale(100%)';
        document.getElementById('heroCard' + index).style.border = '15px solid black';
    }
}
