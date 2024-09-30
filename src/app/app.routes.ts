import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent },
];
