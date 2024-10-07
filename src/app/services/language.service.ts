import { Injectable } from '@angular/core';
import { Language } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageList: Language[] = [
    {
      language: 'English',
    },
    {
      language: 'Spanish',
    },
  ];

  getLanguageList() {
    return this.languageList;
  }

  addLanguage(language: Language): void {
    this.languageList.push(language);
  }

  deleteLanguage(index: number): void {
    this.languageList.splice(index, 1);
  }

  editLanguage(index: number, newLanguage: Language) {
    this.languageList[index] = newLanguage;
  }
}
