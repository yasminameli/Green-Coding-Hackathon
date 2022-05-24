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
  links: ILinks[];
}
