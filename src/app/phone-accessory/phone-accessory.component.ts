import { Component } from '@angular/core';
import { PhoneAccessory } from '../types';

@Component({
  selector: 'app-phone-accessory',
  templateUrl: './phone-accessory.component.html',
  styleUrl: './phone-accessory.component.css',
})
export class PhoneAccessoryComponent {
  accessoryList: PhoneAccessory[] = [];

  name: string = '';

  add() {
    this.accessoryList.push({
      name: this.name,
    });
    this.name = '';
  }
}
