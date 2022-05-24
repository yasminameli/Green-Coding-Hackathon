import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IAuthoritiesResponse } from '../interfaces/authorities.interface';
import { IEstablishmentsResponse } from '../interfaces/establishments.interface';
import { IRegionsResponse } from '../interfaces/regions.interface';

@Injectable({providedIn: 'root'})
export class GoodFoodRatingsService {
    constructor(private http: HttpClient) {}

    public getRegions(): Observable<IRegionsResponse> {
        return this.http.get<IRegionsResponse>('api.ratings.food.gov.uk/Regions');
    }

    public getAuthorities(): Observable<IAuthoritiesResponse> {
        return this.http.get<IAuthoritiesResponse>('api.ratings.food.gov.uk/Regions');
    }

    public getEstablishments(localAuthorityId: number): Observable<IEstablishmentsResponse> {
        return this.http.get<IEstablishmentsResponse>(`api.ratings.food.gov.uk/Regions?localAuthorityId=${localAuthorityId}&businessTypeId=1`);
    }
}