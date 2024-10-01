import { NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
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
import { MobileAppListComponent } from './mobile-app-list/mobile-app-list.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { PhoneAccessoryComponent } from './phone-accessory/phone-accessory.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { MealPlanListComponent } from './meal-plan-list/meal-plan-list.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { DeveloperToolsListComponent } from './developer-tools-list/developer-tools-list.component';
import { FrameworkListComponent } from './framework-list/framework-list.component';
import { LibraryListComponent } from './library-list/library-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeListComponent,
    FruitListComponent,
    CourseListComponent,
    BookListComponent,
    CityListComponent,
    MovieListComponent,
    CarModelListComponent,
    ProductListComponent,
    SubjectListComponent,
    CountryListComponent,
    SportsListComponent,
    VegetableListComponent,
    AnimalListComponent,
    ToolsListComponent,
    LanguageListComponent,
    GameListComponent,
    SoftwareListComponent,
    PhoneContactListComponent,
    MusicListComponent,
    FoodMenuListComponent,
    GroceryListComponent,
    ClassroomListComponent,
    InventoryListComponent,
    LectureListComponent,
    StationeryListComponent,
    FlowerListComponent,
    DestionationListComponent,
    LaptopListComponent,
    LaptopSpecificationListComponent,
    ComputerHardwareListComponent,
    MobileAppListComponent,
    VideoListComponent,
    TvShowListComponent,
    FurnitureListComponent,
    PhoneAccessoryComponent,
    BuildingListComponent,
    PaintingListComponent,
    ArtistListComponent,
    ComposerListComponent,
    PodcastListComponent,
    ExerciseListComponent,
    MealPlanListComponent,
    BudgetListComponent,
    PresentationListComponent,
    TourListComponent,
    EventListComponent,
    DeveloperToolsListComponent,
    FrameworkListComponent,
    LibraryListComponent,
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
