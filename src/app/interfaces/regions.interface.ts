import { ILinks, IMetaData } from './generic.interface';

export interface IRegionsResponse {
  regions: IRegions[];
  meta: IMetaData;
  links: ILinks;
}

export interface IRegions {
  id: number;
  name: string;
  nameKey: string;
  code: string;
  links: ILinks[];
}
