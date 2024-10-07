import { Injectable } from '@angular/core';
import { PhoneAccessory } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PhoneAccessoryService {
  private phoneAccessoryList: PhoneAccessory[] = [
    {
      name: 'Phone Case',
    },
    {
      name: 'Screen Protector',
    },
  ];

  getPhoneAccessoryList() {
    return this.phoneAccessoryList;
  }

  addPhoneAccessory(accessory: PhoneAccessory): void {
    this.phoneAccessoryList.push(accessory);
  }

  deletePhoneAccessory(index: number): void {
    this.phoneAccessoryList.splice(index, 1);
  }

  editPhoneAccessory(index: number, newAccessory: PhoneAccessory) {
    this.phoneAccessoryList[index] = newAccessory;
  }
}
