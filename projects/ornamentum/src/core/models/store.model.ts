import { Config } from './config.model';
import { Progress } from './progress.model';
import { PageDefinition } from './page-definition.model';
import { Localization } from './localization.model';
import { Row } from './row.model';
import { ColumnDefinition } from './column-definition.model';

export interface Store {
  progress: Progress;
  config: Config;
  columnDef: ColumnDefinition;
  rows: Row[];
  pageDef: PageDefinition;
  localization: Localization;
}
