import { Progress } from '../models/progress.model';
import { Action } from '../store-util/models/action.model';

import { createReducer } from '../store-util/reducer';
import { HIDE_LOADING_SPINNER, INITIALIZE_TABLE, SHOW_LOADING_SPINNER } from '../actions/progress-type.action';

const initialState: Progress = {
  isLoading: true,
  isInitialized: false
};

export const progressReducer = createReducer(initialState, (state: Progress, action: Action<any>) => {
  switch (action.type) {
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADING_SPINNER:
      return {
        ...state,
        isLoading: false
      };
    case INITIALIZE_TABLE:
      return {
        ...state,
        isInitialized: true
      };
    default:
      return state;
  }
});
