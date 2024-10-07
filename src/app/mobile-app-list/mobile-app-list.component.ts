import { Component, OnInit } from '@angular/core';
import { MobileAppService } from '../services/mobile-app.service';
import { MobileApp } from '../types';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css',
})
export class MobileAppListComponent implements OnInit {
  mobileAppList: MobileApp[] = [];
  name: string = '';
  platform: string = '';

  constructor(private mobileAppService: MobileAppService) {}

  ngOnInit(): void {
    this.mobileAppList = this.mobileAppService.getMobileAppList();
  }

  add(): void {
    if (this.name && this.platform) {
      this.mobileAppService.addMobileApp({
        name: this.name,
        platform: this.platform,
      });

      this.name = '';
      this.platform = '';
    }
  }

  deleteApp(index: number): void {
    this.mobileAppService.deleteMobileApp(index);
  }

  editField(index: number, fieldName: keyof MobileApp, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempApp = { ...this.mobileAppList[index], [fieldName]: value };
      this.update(index, tempApp);
    }
  }

  update(index: number, app: MobileApp): void {
    this.mobileAppService.editMobileApp(index, app);
  }
}
