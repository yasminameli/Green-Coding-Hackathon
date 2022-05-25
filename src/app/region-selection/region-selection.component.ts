import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { IAuthorities } from '../interfaces/authorities.interface';
import { IEstablishments } from '../interfaces/establishments.interface';
import { IRegions } from '../interfaces/regions.interface';
import { GoodFoodRatingsService } from '../services/gov-food-ratings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.css'],
})
export class RegionSelectionComponent implements OnInit, AfterViewInit {
  tableLength = 0;
  regions: IRegions[] = [];
  authorities: IAuthorities[] = [];

  showAuthority = true;
  showTable = false;

  displayedColumns: string[] = [
    'name',
    'address',
    'rating',
    'lastInspection',
    'viewDetails',
  ];
  dataSource = new MatTableDataSource<IEstablishments>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private goodFood: GoodFoodRatingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.goodFood.getRegions().subscribe((response) => {
      this.regions = response.regions;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  regionOnChange($event: any) {
    this.goodFood
      .getAuthorities()
      .pipe(
        map((response) => {
          return response.authorities.filter(
            (authority) => authority.RegionName === $event.value
          );
        })
      )
      .subscribe((authorities) => {
        this.authorities = authorities;
      });
    this.showAuthority = false;
  }

  authorityOnChange($event: any) {
    // call restaurant api and display on table
    this.goodFood.getEstablishments($event.value).subscribe((response) => {
      this.tableLength = response.establishments.length;
      this.dataSource.data = response.establishments;
    });
    this.showTable = true;
  }

  onNavigate(row: any) {
    this.router.navigate(['restaurant-details'], { state: { row } });
  }
}
