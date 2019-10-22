import { createAction } from '../store-util/action';
import { Localization } from '../models/localization.model';

export const setLocalization = createAction<Partial<Localization>>('set-localization-state');
