import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Hero {
  id: string;
  name: string;
  images: string;
}
/* 
interface Powerstats {
  strength: number;
  durability: number;
  power: number;
  combat: number;
} */
@Injectable()
export class ApiService {

  BASE_URL = 'https://akabab.github.io/superhero-api/api/';

  constructor(private http: HttpClient) { }

  getHeroes() {
    // return this.http.get<Hero[]>(this.BASE_URL + 'all.json');
    const randomNum = function getRandomInt(max = 562) {
      return Math.floor(Math.random() * Math.floor(max));
    };

    return this.http.get<any>('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').map(data => {
      const heroes = [];

      for (let i = 0; i < 18; i++) {
        heroes.push(data[randomNum()]);
      }

      return heroes;
    });
  }
  getHero(id) {
    return this.http.get<Hero>(this.BASE_URL + 'id/' + id + '.json');
  }
}
