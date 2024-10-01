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
import { LanguageListComponent } from './language-list/language-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { SoftwareListComponent } from './software-list/software-list.component';
import { PhoneContactListComponent } from './phone-contact-list/phone-contact-list.component';
import { MusicListComponent } from './music-list/music-list.component';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { LectureListComponent } from './lecture-list/lecture-list.component';
import { StationeryListComponent } from './stationery-list/stationery-list.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { DestionationListComponent } from './destionation-list/destionation-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopSpecificationListComponent } from './laptop-specification-list/laptop-specification-list.component';
import { ComputerHardwareListComponent } from './computer-hardware-list/computer-hardware-list.component';

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
  { path: 'language-list', component: LanguageListComponent },
  { path: 'game-list', component: GameListComponent },
  { path: 'software-list', component: SoftwareListComponent },
  { path: 'phone-contact-list', component: PhoneContactListComponent },
  { path: 'music-list', component: MusicListComponent },
  { path: 'food-menu-list', component: FoodMenuListComponent },
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'classroom-list', component: ClassroomListComponent },
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'lecture-list', component: LectureListComponent },
  { path: 'stationery-list', component: StationeryListComponent },
  { path: 'flower-list', component: FlowerListComponent },
  { path: 'destination-list', component: DestionationListComponent },
  { path: 'laptop-list', component: LaptopListComponent },
  {
    path: 'laptop-specification-list',
    component: LaptopSpecificationListComponent,
  },
  { path: 'computer-hardware-list', component: ComputerHardwareListComponent },
];
