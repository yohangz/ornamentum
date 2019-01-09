import { Observable } from 'rxjs';

import { DataTableFilterOption } from './data-table-filter-option.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Filter value extract callback
 * @param column Target filter column
 * @return Filter value promise
 */
export type DataTableFilterValueExtractCallback = (column: DataTableColumnComponent) => Observable<DataTableFilterOption[]>;
