import { Injectable } from '@angular/core';
import { Game } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameList: Game[] = [
    {
      name: 'Chess',
      year: 1950,
    },
    {
      name: 'Monopoly',
      year: 1935,
    },
  ];

  getGameList() {
    return this.gameList;
  }

  addGame(game: Game): void {
    this.gameList.push(game);
  }

  deleteGame(index: number): void {
    this.gameList.splice(index, 1);
  }

  editGame(index: number, newGame: Game) {
    this.gameList[index] = newGame;
  }
}
