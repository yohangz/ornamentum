import { Localization } from '../models/localization.model';
import { createReducer, on } from '../store-util/reducer';
import { setInitialState } from '../actions/root.action';
import { InitialState } from '../models/initial-state.model';
import { updateLocalization } from '../actions/localization.model';

const initialState: Localization = {
  indexColumnTitle: 'id',
  paginationLimitLabel: 'Limit',
  paginationRangeLabel: 'Results',
  noDataMessageHeader: 'Whoops!',
  noDataMessageBody: 'No data to display. Added data will appear here.',
};

export default createReducer<Localization>(initialState,
  on(setInitialState, (state: Localization, { localization }: InitialState): Localization => {
    return {
      ...state,
      ...localization
    };
  }),
  on(updateLocalization, (state: Localization, localization: Localization): Localization => {
    return {
      ...state,
      ...localization
    };
  }),
);
