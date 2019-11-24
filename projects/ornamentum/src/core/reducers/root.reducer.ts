import { combineReducers } from '../store-util/reducer';
import progressReducer from './progress.reducer';
import configReducer from './config.reducer';
import pageReducer from './page.reducer';
import columnReducer from './column.reducer';
import rowReducer from './row.reducer';
import localizationReducer from './localization.reducer';

export const callableRootReducer = combineReducers({
  progress: progressReducer,
  config: configReducer,
  columnDef: columnReducer,
  rows: rowReducer,
  pageDef: pageReducer,
  localization: localizationReducer
});
