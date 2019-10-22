import { createAction } from '../store-util/action';
import { Data } from '../models/data.model';

export const setData = createAction<Data>('set-data');
