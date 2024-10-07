import { Component, OnInit } from '@angular/core';
import { ComposerService } from '../services/composer.service';
import { Composer } from '../types';

@Component({
  selector: 'app-composer',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css',
})
export class ComposerListComponent implements OnInit {
  composerList: Composer[] = [];
  name: string = '';

  constructor(private composerService: ComposerService) {}

  ngOnInit(): void {
    this.composerList = this.composerService.getComposerList();
  }

  add(): void {
    if (this.name) {
      this.composerService.addComposer({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteComposer(index: number): void {
    this.composerService.deleteComposer(index);
  }

  editField(index: number, fieldName: keyof Composer, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempComposer = { ...this.composerList[index], [fieldName]: value };
      this.update(index, tempComposer);
    }
  }

  update(index: number, composer: Composer): void {
    this.composerService.editComposer(index, composer);
  }
}
