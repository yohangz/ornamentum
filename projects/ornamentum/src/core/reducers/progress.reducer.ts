import { Progress } from '../models/progress.model';

import { createReducer, on } from '../store-util/reducer';
import {hideLoadingSpinner, initializeTable, showLoadingSpinner} from '../actions/progress.action';

const initialState: Progress = {
  isLoading: true,
  isInitialized: false
};

export const progressReducer = createReducer<Progress>(initialState,
  on(showLoadingSpinner, (state: Progress): Progress => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(hideLoadingSpinner, (state: Progress): Progress => {
    return {
      ...state,
      isLoading: false
    };
  }),
  on(initializeTable, (state: Progress): Progress => {
    return {
      ...state,
      isInitialized: true
    };
  }),
);
