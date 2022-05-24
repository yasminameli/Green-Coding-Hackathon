export interface IMetaData {
  dataSource: string;
  extractDate: string;
  itemCount: number;
  returncode: string;
  totalCount: number;
  totalPages: number;
  pageSize: number;
  pageNumber: number;
}

export interface ILinks {
  rel: string;
  href: string;
}
