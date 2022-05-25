import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IAuthoritiesResponse } from '../interfaces/authorities.interface';
import { IEstablishments, IEstablishmentsResponse } from '../interfaces/establishments.interface';
import { IRegionsResponse } from '../interfaces/regions.interface';

@Injectable({ providedIn: 'root' })
export class GoodFoodRatingsService {
  constructor(private http: HttpClient) {}

  public getRegions(): Observable<IRegionsResponse> {
    return this.http.get<IRegionsResponse>(
      'https://api.ratings.food.gov.uk/regions',
      {
        headers: {
          'x-api-version': '2',
        },
      }
    );
  }

  public getAuthorities(): Observable<IAuthoritiesResponse> {
    return this.http.get<IAuthoritiesResponse>(
      'https://api.ratings.food.gov.uk/authorities',
      {
        headers: {
          'x-api-version': '2',
        },
      }
    );
  }

  public getEstablishments(
    localAuthorityId: number
  ): Observable<IEstablishmentsResponse> {
    return this.http.get<IEstablishmentsResponse>(
      `https://api.ratings.food.gov.uk/establishments?localAuthorityId=${localAuthorityId}&businessTypeId=1`,
      {
        headers: {
          'x-api-version': '2',
        },
      }
    );
  }

  public getEstablishmentById(establishmentId: string): Observable<IEstablishments> {
    return this.http.get<IEstablishments>(
      `https://api.ratings.food.gov.uk/establishments/${establishmentId}`,
      {
        headers: {
          'x-api-version': '2',
        },
      }
    );
  }
}
