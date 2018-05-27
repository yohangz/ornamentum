import { TabComponent } from '../components/tab-set/tab/tab';

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
