import { ILinks, IMetaData } from './generic.interface';

export interface IAuthoritiesResponse {
  authorities: IAuthorities[];
  meta: IMetaData;
  links: ILinks;
}

export interface IAuthorities {
  LocalAuthorityId: number;
  LocalAuthorityIdCode: string;
  Name: string;
  FriendlyName: string;
  Url: string;
  SchemeUrl: string;
  Email: string;
  RegionName: string;
  FileName: string;
  FileNameWelsh: null;
  EstablishmentCount: number;
  CreationDate: string;
  LastPublishedDate: string;
  SchemeType: number;
  links: ILinks[];
}
