import { Component, OnInit } from '@angular/core';
import { PhoneAccessoryService } from '../services/phone-accessory.service';
import { PhoneAccessory } from '../types';

@Component({
  selector: 'app-phone-accessory',
  templateUrl: './phone-accessory.component.html',
  styleUrl: './phone-accessory.component.css',
})
export class PhoneAccessoryComponent implements OnInit {
  phoneAccessoryList: PhoneAccessory[] = [];
  name: string = '';

  constructor(private phoneAccessoryService: PhoneAccessoryService) {}

  ngOnInit(): void {
    this.phoneAccessoryList =
      this.phoneAccessoryService.getPhoneAccessoryList();
  }

  add(): void {
    if (this.name) {
      this.phoneAccessoryService.addPhoneAccessory({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteAccessory(index: number): void {
    this.phoneAccessoryService.deletePhoneAccessory(index);
  }

  editField(
    index: number,
    fieldName: keyof PhoneAccessory,
    currentValue: string
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempAccessory = {
        ...this.phoneAccessoryList[index],
        [fieldName]: value,
      };
      this.update(index, tempAccessory);
    }
  }

  update(index: number, accessory: PhoneAccessory): void {
    this.phoneAccessoryService.editPhoneAccessory(index, accessory);
  }
}
