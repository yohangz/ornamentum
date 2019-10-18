import { combineReducers } from '../store-util/reducer';
import { progressReducer } from './progress.reducer';

export const callableRootReducer = combineReducers({
  progress: progressReducer
});
