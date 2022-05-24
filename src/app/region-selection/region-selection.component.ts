import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegions, IRegionsResponse } from '../interfaces/regions.interface';
import { GoodFoodRatingsService } from '../services/gov-food-ratings.service';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.css'],
})
export class RegionSelectionComponent implements OnInit {
  regions: IRegions[] = []
  
  showAuthority = true;
  showTable = false
  authorities = [
    {
      LocalAuthorityId: 183,
      LocalAuthorityIdCode: '421',
      Name: 'St Helens',
      FriendlyName: 'st-helens',
      Url: 'http://www.sthelens.gov.uk',
      SchemeUrl: '',
      Email: 'environmentalhealth@sthelens.gov.uk',
      RegionName: 'North West',
      FileName: 'http://ratings.food.gov.uk/OpenDataFiles/FHRS421en-GB.xml',
      FileNameWelsh: null,
      EstablishmentCount: 1336,
      CreationDate: '2010-08-17T15:30:24.87',
      LastPublishedDate: '2022-05-18T00:32:18.15',
      SchemeType: 1,
      links: [
        {
          rel: 'self',
          href: 'http://api.ratings.food.gov.uk/authorities/183',
        },
      ],
    },
  ];

  displayedColumns: string[] = ['name', 'address', 'rating', 'lastInspection'];
  dataSource = ELEMENT_DATA
  constructor(private govFoodRatingsService: GoodFoodRatingsService) {}

  ngOnInit(): void {
    this.govFoodRatingsService.getRegions().subscribe(response => {
      this.regions = response.regions;
    });
  }

  regionOnChange($event: any) {
    console.log($event);
    this.showAuthority = false;
    // call authority api service filter by region's name
  }

  authorityOnChange($event: any) {
    console.log($event);
    // call restaurant api and display on table
    this.showTable = true;
  }
}
