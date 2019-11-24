import { Progress } from '../models/progress.model';

import { createReducer, on } from '../store-util/reducer';
import * as actions from '../actions/progress.action';

const initialState: Progress = {
  isLoading: true,
  isInitialized: false
};

export default createReducer<Progress>(initialState,
  on(actions.showLoadingSpinner, (state: Progress): Progress => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(actions.hideLoadingSpinner, (state: Progress): Progress => {
    return {
      ...state,
      isLoading: false
    };
  }),
  on(actions.initializeTable, (state: Progress): Progress => {
    return {
      ...state,
      isInitialized: true
    };
  }),
);
