import { NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [AppComponent, StudentListComponent],
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
