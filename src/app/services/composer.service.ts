import { Injectable } from '@angular/core';
import { Composer } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  private composerList: Composer[] = [
    {
      name: 'Ludwig van Beethoven',
    },
    {
      name: 'Johann Sebastian Bach',
    },
  ];

  getComposerList() {
    return this.composerList;
  }

  addComposer(composer: Composer): void {
    this.composerList.push(composer);
  }

  deleteComposer(index: number): void {
    this.composerList.splice(index, 1);
  }

  editComposer(index: number, newComposer: Composer) {
    this.composerList[index] = newComposer;
  }
}
