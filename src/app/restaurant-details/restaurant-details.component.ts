import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  public address1!: string;
  public address2!: string;
  public address3!: string;
  public address4!: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state: any = navigation?.extras.state;
    this.address1 = state?.row.AddressLine1;
    this.address2 = state?.row.AddressLine2;
    this.address3 = state?.row.AddressLine3;
    this.address4 = state?.row.AddressLine4;
  }

  ngOnInit(): void {}

  value(address: any) {
    return address;
  }
}
