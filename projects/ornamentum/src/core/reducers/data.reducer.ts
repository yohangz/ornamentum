import { Data } from '../models/data.model';
import { createReducer, on } from '../store-util/reducer';

const initialState: Data = {
  offset: 0,
  limit: 15,
  page: 1,
  count: 0,
  rows: []
};

export default createReducer<Data>(initialState,
);
