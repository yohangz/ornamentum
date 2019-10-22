import { createAction } from '../store-util/action';

import { Config } from '../models/config.model';

export const setConfig = createAction<Partial<Config>>('set-config-initial-state');
