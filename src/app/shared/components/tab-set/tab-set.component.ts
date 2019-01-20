import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';

import { TabChangeEvent } from '../../models';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tab-set',
  styleUrls: ['./tab-set.component.scss'],
  templateUrl: './tab-set.component.html'
})
export class TabSetComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  public tabCollection: QueryList<TabComponent>;

  @Input()
  public activeId: string;

  @Input()
  public lazyLoad: boolean;

  @Output()
  public change = new EventEmitter<TabChangeEvent>();

  public onTabClick(tab: TabComponent): void {
    if (!tab.disabled && !tab.active) {
      const previousTab = this.getActiveTab();
      tab.initialLoad = false;
      this.setActiveTab(tab);

      this.change.emit({
        newTab: tab,
        previousTab: previousTab
      });
    }
  }

  public ngAfterContentInit(): void {
    if (this.activeId !== undefined) {
      const tab = this.getTabById(this.activeId);
      if (tab) {
        this.onTabClick(tab);
      }
    } else {
      if (this.tabCollection.length) {
        const tab = this.tabCollection.first;
        this.onTabClick(tab);
      }
    }
  }

  private getActiveTab(): TabComponent {
    return this.tabCollection.find(tab => tab.active);
  }

  private setActiveTab(tabComponent: TabComponent): void {
    this.tabCollection.forEach((tab: TabComponent) => (tab.active = false));
    tabComponent.active = true;
  }

  private getTabById(id: string): TabComponent {
    return this.tabCollection.find(tab => tab.id === id);
  }
}
