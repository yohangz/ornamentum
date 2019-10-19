import { combineReducers } from '../store-util/reducer';
import { progressReducer } from './progress.reducer';
import { configReducer } from './config.reducer';

export const callableRootReducer = combineReducers({
  progress: progressReducer,
  config: configReducer
});
