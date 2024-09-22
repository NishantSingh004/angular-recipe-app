import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TimetableRoutingModule } from './timetable/timetable-routing.module';
import { ResultsComponent } from './results/results.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    TimetableRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
