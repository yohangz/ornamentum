import { ExampleData } from './example-data.model';

export interface ResourceData<T> {
  count: number;
  data: ExampleData[];
  limit;
  offset;
}
