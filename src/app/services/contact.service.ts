import { Injectable } from '@angular/core';
import { Contact } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactList: Contact[] = [
    {
      name: 'John Doe',
      phoneNumber: '091212727112',
    },
  ];

  getContactList() {
    return this.contactList;
  }

  addContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  deleteContact(index: number): void {
    this.contactList.splice(index, 1);
  }

  editContact(index: number, newContact: Contact) {
    this.contactList[index] = newContact;
  }
}
