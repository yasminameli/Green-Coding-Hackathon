import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionSelectionComponent } from './region-selection/region-selection.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

const routes: Routes = [
  { path: 'region-selection', component: RegionSelectionComponent },
  { path: 'restaurant-details', component: RestaurantDetailsComponent},
  { path: '**', redirectTo:'region-selection'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
