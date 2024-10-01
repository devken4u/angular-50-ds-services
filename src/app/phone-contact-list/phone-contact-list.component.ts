import { Component } from '@angular/core';
import { Contact } from '../types';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css',
})
export class PhoneContactListComponent {
  contactList: Contact[] = [];

  name: string = '';
  phoneNumber: string = '';

  add() {
    this.contactList.push({
      name: this.name,
      phoneNumber: this.phoneNumber,
    });
    this.name = '';
    this.phoneNumber = '';
  }
}
