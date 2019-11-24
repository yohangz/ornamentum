import { createAction } from '../store-util/action';
import { TableDimensionConfig } from '../models/table-dimension-config.model';

export const setTableDimensions = createAction<TableDimensionConfig>('set-table-dimensions');
