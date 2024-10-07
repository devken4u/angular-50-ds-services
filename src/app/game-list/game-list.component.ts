import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../types';

@Component({
  selector: 'app-game',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent implements OnInit {
  gameList: Game[] = [];
  name: string = '';
  year: number | null = null;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameList = this.gameService.getGameList();
  }

  add(): void {
    if (this.name && this.year) {
      this.gameService.addGame({
        name: this.name,
        year: this.year,
      });

      this.name = '';
      this.year = null;
    }
  }

  deleteGame(index: number): void {
    this.gameService.deleteGame(index);
  }

  editField(
    index: number,
    fieldName: keyof Game,
    currentValue: string | number
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue.toString());
    if (value !== null) {
      const tempGame = {
        ...this.gameList[index],
        [fieldName]: fieldName === 'year' ? +value : value,
      };
      this.update(index, tempGame);
    }
  }

  update(index: number, game: Game): void {
    this.gameService.editGame(index, game);
  }
}
