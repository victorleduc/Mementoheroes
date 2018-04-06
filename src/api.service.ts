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
    return this.http.get<Hero[]>(this.BASE_URL + 'all.json');
  }
  getHero(id) {
    return this.http.get<Hero>(this.BASE_URL + 'id/' + id + '.json');
  }/* 
  getStrength(strength) {
    return this.http.get<Powerstats>(this.BASE_URL + 'powerstats/' + strength + '.json');
  } */
}
