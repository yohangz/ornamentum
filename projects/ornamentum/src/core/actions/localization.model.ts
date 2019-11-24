import { createAction } from '../store-util/action';
import { Localization } from '../models/localization.model';

export const updateLocalization = createAction<Partial<Localization>>('update-localization');
