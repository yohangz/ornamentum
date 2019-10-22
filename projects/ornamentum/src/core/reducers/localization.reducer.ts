import { Localization } from '../models/localization.model';
import { createReducer, on } from '../store-util/reducer';;
import { setLocalization } from '../actions/localization.model';

const initialState: Localization = {
  indexColumnTitle: 'id',
  paginationLimitLabel: 'Limit',
  paginationRangeLabel: 'Results',
  noDataMessageHeader: 'Whoops!',
  noDataMessageBody: 'No data to display. Added data will appear here.',
};

export default createReducer<Localization>(initialState,
  on(setLocalization, (state: Localization, payload: Partial<Localization>): Localization => {
    return {
      ...state,
      ...payload
    };
  }),
);
