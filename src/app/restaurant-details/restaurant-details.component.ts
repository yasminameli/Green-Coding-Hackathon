import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IEstablishments } from '../interfaces/establishments.interface';
import { GoodFoodRatingsService } from '../services/gov-food-ratings.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantDetail$ = new Observable<IEstablishments>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private goodFood: GoodFoodRatingsService
  ) {}

  ngOnInit(): void {
    this.restaurantDetail$ = this.activatedRoute.queryParamMap.pipe(
      switchMap((params) => {
        return this.goodFood.getEstablishmentById(params.get('id')!);
      })
    );
  }
}
