import { ILinks, IMetaData } from './generic.interface';

export interface IEstablishmentsResponse {
  establishments: IEstablishments[];
  meta: IMetaData;
  links: ILinks;
}

export interface IEstablishments {
  FHRSID: number;
  LocalAuthorityBusinessID: string;
  BusinessName: string;
  BusinessType: string;
  RatingValue: string;
  RatingDate: string;
  PostCode: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  AddressLine4: string;
  links: ILinks[];
}
