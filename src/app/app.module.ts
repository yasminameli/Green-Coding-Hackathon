import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionSelectionComponent } from './region-selection/region-selection.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { GoodFoodRatingsService } from './services/gov-food-ratings.service';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    PipeModule,
    MatIconModule,
  ],
  providers: [GoodFoodRatingsService],
  bootstrap: [AppComponent],
  declarations: [
    RegionSelectionComponent,
    RestaurantDetailsComponent,
    AppComponent,
  ],
})
export class AppModule {}
