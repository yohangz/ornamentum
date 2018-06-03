import { TabComponent } from '../components';

export interface TabChangeEvent {
  /**
   * Id of the newly selected tab
   */
  newTab: TabComponent;

  /**
   * Id of the previous selected tab
   */
  previousTab: TabComponent;
}
