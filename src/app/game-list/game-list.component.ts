import { Component } from '@angular/core';
import { Game } from '../types';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent {
  gameList: Game[] = [];

  name: string = '';
  year: number = 0;

  add() {
    this.gameList.push({
      name: this.name,
      year: this.year,
    });
    this.name = '';
    this.year = 0;
  }
}
