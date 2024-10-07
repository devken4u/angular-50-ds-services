import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Language } from '../types';

@Component({
  selector: 'app-language',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css',
})
export class LanguageListComponent implements OnInit {
  languageList: Language[] = [];
  language: string = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageList = this.languageService.getLanguageList();
  }

  add(): void {
    if (this.language) {
      this.languageService.addLanguage({
        language: this.language,
      });

      this.language = '';
    }
  }

  deleteLanguage(index: number): void {
    this.languageService.deleteLanguage(index);
  }

  editField(index: number, fieldName: keyof Language, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempLanguage = { ...this.languageList[index], [fieldName]: value };
      this.update(index, tempLanguage);
    }
  }

  update(index: number, language: Language): void {
    this.languageService.editLanguage(index, language);
  }
}
