import { Component } from '@angular/core';
import { MobileApp } from '../types';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css',
})
export class MobileAppListComponent {
  appList: MobileApp[] = [];

  name: string = '';
  platform: string = '';

  add() {
    this.appList.push({
      name: this.name,
      platform: this.platform,
    });
    this.name = '';
    this.platform = '';
  }
}
