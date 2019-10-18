import { createAction } from '../store-util/action';

import { HIDE_LOADING_SPINNER, INITIALIZE_TABLE, SHOW_LOADING_SPINNER } from './progress-type.action';

export const showLoadingSpinner = createAction(SHOW_LOADING_SPINNER);
export const hideLoadingSpinner = createAction(HIDE_LOADING_SPINNER);
export const initializeTable = createAction(INITIALIZE_TABLE);
