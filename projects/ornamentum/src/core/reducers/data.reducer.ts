import { Data } from '../models/data.model';
import { createReducer, on } from '../store-util/reducer';
import { setData } from '../actions/data.action';

const initialState: Data = {
  offset: 0,
  limit: 15,
  page: 1,
  nextPage: 0,
  previousPage: 0,
  lastPage: 0,
  count: 0,
  rows: []
};

export default createReducer<Data>(initialState,
  on(setData, (state: Data, payload: Data): Data => {
    return {
      ...payload
    };
  })
);
