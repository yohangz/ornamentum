import { combineReducers } from '../store-util/reducer';
import progressReducer from './progress.reducer';
import configReducer from './config.reducer';
import dataReducer from './data.reducer';
import columnReducer from './column.reducer';

export const callableRootReducer = combineReducers({
  progress: progressReducer,
  config: configReducer,
  data: dataReducer,
  column: columnReducer
});
