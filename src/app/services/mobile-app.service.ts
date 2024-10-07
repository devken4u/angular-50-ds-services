import { Injectable } from '@angular/core';
import { MobileApp } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MobileAppService {
  private mobileAppList: MobileApp[] = [
    {
      name: 'Facebook',
      platform: 'iOS',
    },
    {
      name: 'WhatsApp',
      platform: 'Android',
    },
  ];

  getMobileAppList() {
    return this.mobileAppList;
  }

  addMobileApp(app: MobileApp): void {
    this.mobileAppList.push(app);
  }

  deleteMobileApp(index: number): void {
    this.mobileAppList.splice(index, 1);
  }

  editMobileApp(index: number, newApp: MobileApp) {
    this.mobileAppList[index] = newApp;
  }
}
