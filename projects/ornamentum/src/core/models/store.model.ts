import { Config } from './config.model';
import { Progress } from './progress.model';
import { Column } from './column.model';
import { Data } from './data.model';
import { Localization } from './localization.model';

export interface Store {
  progress: Progress;
  config: Config;
  columns: Column[];
  data: Data;
  localization: Localization;
}
