import { Row } from './row.model';

export interface Data {
  offset: number;
  limit: number;
  page: number;
  count: number;
  rows: Row[];
}
