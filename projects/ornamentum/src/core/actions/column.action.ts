import { createAction } from '../store-util/action';
import { Column } from '../models/column.model';

export const setColumns = createAction<Array<Partial<Column>>>('set-column-initial-state');
