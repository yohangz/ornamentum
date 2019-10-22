import { createAction } from '../store-util/action';

export const showLoadingSpinner = createAction('show-loading-spinner');
export const hideLoadingSpinner = createAction('hide-loading-spinner');
export const initializeTable = createAction('initialize-table');
