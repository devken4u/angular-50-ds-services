import { Component } from '@angular/core';
import { Composer } from '../types';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css',
})
export class ComposerListComponent {
  composerList: Composer[] = [];

  name: string = '';

  add() {
    this.composerList.push({
      name: this.name,
    });
    this.name = '';
  }
}
