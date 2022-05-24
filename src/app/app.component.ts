import { Component } from '@angular/core';
import { GoodFoodRatingsService } from './services/gov-food-ratings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-website';

  constructor(private goodFood: GoodFoodRatingsService) {
    goodFood.getAuthorities().subscribe((data) => {
      console.log(data);
    })
    goodFood.getRegions().subscribe((data) => {
      console.log(data);
    })
    goodFood.getEstablishments(1).subscribe((data) => {
      console.log(data);
    })
  }
}
 