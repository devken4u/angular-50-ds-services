import { Component } from '@angular/core';
import { Language } from '../types';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css',
})
export class LanguageListComponent {
  languageList: Language[] = [];

  language: string = '';

  add() {
    this.languageList.push({
      language: this.language,
    });
    this.language = '';
  }
}
