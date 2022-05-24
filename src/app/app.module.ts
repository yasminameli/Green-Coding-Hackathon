import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionSelectionComponent } from './region-selection/region-selection.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    RegionSelectionComponent,
    RestaurantDetailsComponent
  ]
})
export class AppModule { }
