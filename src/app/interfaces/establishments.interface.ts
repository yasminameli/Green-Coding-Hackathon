import { ILinks, IMetaData } from './generic.interface';

export interface IEstablishmentsResponse {
  establishments: IEstablishments[];
  meta: IMetaData;
  links: ILinks;
}

export interface IEstablishments {
  FHRSID: number;
  ChangesByServerID: number;
  LocalAuthorityBusinessID: string;
  BusinessName: string;
  BusinessType: string;
  BusinessTypeID: number;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  AddressLine4: string;
  PostCode: string;
  Phone: string;
  RatingValue: string;
  RatingKey: string;
  RatingDate: string;
  LocalAuthorityCode: string;
  LocalAuthorityName: string;
  LocalAuthorityWebSite: string;
  LocalAuthorityEmailAddress: string;
  scores: {
    Hygiene: number;
    Structural: number;
    ConfidenceInManagement: number;
  };
  SchemeType: string;
  geocode: {
    longitude: string;
    latitude: string;
  };
  RightToReply: string;
  Distance: string;
  NewRatingPending: true;
}
