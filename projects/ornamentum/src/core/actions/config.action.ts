import { createAction } from '../store-util/action';

import { Config } from '../models/config.model';

export const setInitialState = createAction<Partial<Config>>('set-config-initial-state');
