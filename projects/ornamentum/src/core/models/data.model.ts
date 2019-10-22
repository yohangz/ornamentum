import { Row } from './row.model';

export interface Data {
  offset: number;
  limit: number;
  page: number;
  nextPage: number;
  previousPage: number;
  lastPage: number;
  count: number;
  rows: Row[];
}
