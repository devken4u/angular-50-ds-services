import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../types';

@Component({
  selector: 'app-contact',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css',
})
export class PhoneContactListComponent implements OnInit {
  contactList: Contact[] = [];
  name: string = '';
  phoneNumber: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactList = this.contactService.getContactList();
  }

  add(): void {
    if (this.name && this.phoneNumber) {
      this.contactService.addContact({
        name: this.name,
        phoneNumber: this.phoneNumber,
      });

      this.name = '';
      this.phoneNumber = '';
    }
  }

  deleteContact(index: number): void {
    this.contactService.deleteContact(index);
  }

  editField(index: number, fieldName: keyof Contact, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempContact = { ...this.contactList[index], [fieldName]: value };
      this.update(index, tempContact);
    }
  }

  update(index: number, contact: Contact): void {
    this.contactService.editContact(index, contact);
  }
}
