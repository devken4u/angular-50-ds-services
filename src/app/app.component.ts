import { Component } from '@angular/core';
import { routes } from './app.routes';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'typescript-ds-50';

  routes: Routes;

  constructor() {
    this.routes = routes;
  }
}
