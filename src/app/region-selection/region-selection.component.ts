import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IAuthorities } from '../interfaces/authorities.interface';
import { IRegions } from '../interfaces/regions.interface';
import { GoodFoodRatingsService } from '../services/gov-food-ratings.service';

@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.css'],
})
export class RegionSelectionComponent implements OnInit {
  tableLength = 0;
  regions: IRegions[] = []
  authorities: IAuthorities[] = []
  
  showAuthority = true;
  showTable = false

  displayedColumns: string[] = ['name', 'address', 'rating', 'lastInspection'];
  dataSource: any[] = []
  constructor(private goodFood: GoodFoodRatingsService) {}

  ngOnInit(): void {
    this.goodFood.getRegions().subscribe(response => {
      this.regions = response.regions;
    });
  }

  regionOnChange($event: any) {
    this.goodFood.getAuthorities().pipe(map((response) => {
      return response.authorities.filter(authority => authority.RegionName === $event.value)
    })).subscribe(authorities => {
      this.authorities = authorities
    })
    this.showAuthority = false;
  }

  authorityOnChange($event: any) {
    // call restaurant api and display on table
    this.goodFood.getEstablishments($event.value).subscribe(response => {
      this.tableLength = response.establishments.length;
      this.dataSource = response.establishments
    })
    this.showTable = true;
  }
}
