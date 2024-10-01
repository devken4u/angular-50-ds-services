import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarModelListComponent } from './car-model-list/car-model-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ToolsListComponent } from './tools-list/tools-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'fruit-list', component: FruitListComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'city-list', component: CityListComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'car-model-list', component: CarModelListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'subject-list', component: SubjectListComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'sports-list', component: SportsListComponent },
  { path: 'vegetable-list', component: VegetableListComponent },
  { path: 'animal-list', component: AnimalListComponent },
  { path: 'tools-list', component: ToolsListComponent },
];
