import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuGroup, MenuItem } from '../../../core/models';

import { Theme } from '../../../core/models/theme.enum';

/**
 * Component class for showing main view.
 * @class MainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent {
  public themeCssClass: string = Theme.dark;
  public menuGroups: MenuGroup[] = [
    {
      expanded: true,
      name: 'Data Table',
      menuItems: [
        {
          routePath: '/feature/data-table/overview',
          title: 'Overview',
          navigation: [
            {
              title: 'Basic Usage',
              anchor: 'basicUsage',
            },
            {
              title: 'Installation',
              anchor: 'installation',
            },
            {
              title: 'Peer Dependencies',
              anchor: 'peerDependencies'
            },
            {
              title: 'Functionality',
              anchor: 'functionality',
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks',
            }
          ]
        },
        {
          routePath: '/feature/data-table/client-side-data-binding',
          title: 'Client Side Data Binding'
        },
        {
          routePath: '/feature/data-table/server-side-data-binding',
          title: 'Server Side Data Binding'
        },
        {
          routePath: '/feature/data-table/real-time-data-binding',
          title: 'Real Time Data Binding'
        },
        {
          routePath: '/feature/data-table/pagination',
          title: 'Pagination',
          navigation: [
            {
              title: 'What you will see',
              anchor: 'whatYouWillSee'
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage',
            },
            {
              title: 'Useful Properties',
              anchor: 'usefulProperties'
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks',
            }
          ]
        },
        {
          routePath: '/feature/data-table/column/sorting',
          title: 'Column Sorting',
          navigation: [
            {
              title: 'What you will see',
              anchor: 'whatYouWillSee'
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage',
            },
            {
              title: 'Useful Properties',
              anchor: 'usefulProperties',
              subNavigation: [
                {
                  title: 'Sort Order',
                  anchor: 'sortOrder'
                },
                {
                  title: 'Sort Field',
                  anchor: 'sortField'
                },
                {
                  title: 'Multi Column Sortable',
                  anchor: 'multiColumnSortable'
                }
              ]
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/grouping',
          title: 'Row Grouping'
        },
        {
          routePath: '/feature/data-table/column/filtering',
          title: 'Filtering'
        },
        {
          routePath: '/feature/data-table/row-selection',
          title: 'Row Selection'
        },
        {
          routePath: '/feature/data-table/column/resizable',
          title: 'Column Resizing'
        },
        {
          routePath: '/feature/data-table/data-persistence',
          title: 'Data Persistence'
        },
        {
          routePath: '/feature/data-table/substitute-rows',
          title: 'Substitute Rows'
        },
        {
          routePath: '/feature/data-table/loading-spinner',
          title: 'Data Loading Spinner'
        },
        {
          routePath: '/feature/data-table/header-details',
          title: 'Header Details',
          navigation: [
            {
              title: 'What You Will See',
              anchor: 'whatYouWillSee'
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage'
            },
            {
              title: 'Useful Properties',
              anchor: 'usefulProperties',
              subNavigation: [
                {
                  title: 'Title',
                  anchor: 'title'
                },
                {
                  title: 'Show Refresh Button',
                  anchor: 'showRefreshButton'
                },
                {
                  title: 'Show Column Selector',
                  anchor: 'showColumnSelector'
                }
              ]
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/responsive-configuration',
          title: 'Responsive Configuration'
        },
        {
          routePath: '/feature/data-table/translations',
          title: 'Translations'
        },
        {
          routePath: '/feature/data-table/events',
          title: 'Events'
        },
        {
          routePath: '/feature/data-table/templates/cell-template',
          title: 'Cell Template',
          navigation: [
            {
              title: 'What you will see',
              anchor: 'whatYouWillSee',
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage',
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks',
            }
          ]
        },
        {
          routePath: '/feature/data-table/templates/expand-template',
          title: 'Row Expand Template'
        },
        {
          routePath: '/feature/data-table/templates/loading-spinner-template',
          title: 'Loading Spinner Template'
        },
        {
          routePath: '/feature/data-table/templates/no-records-template',
          title: 'No Records Template'
        }
      ]
    },
    {
      expanded: true,
      name: 'Dropdown',
      menuItems: [
        {
          routePath: '/feature/dropdown/overview',
          title: 'Basic Usage'
        },
        {
          routePath: '/feature/dropdown/client-side-data-binding',
          title: 'Client Side Data Binding'
        },
        {
          routePath: '/feature/dropdown/server-side-data-binding',
          title: 'Server Side Data Binding'
        },
        {
          routePath: '/feature/dropdown/real-time-data-binding',
          title: 'Realtime Data Binding'
        },
        {
          routePath: '/feature/dropdown/grouping',
          title: 'Grouping'
        },
        {
          routePath: '/feature/dropdown/filtering',
          title: 'Filtering'
        },
        {
          routePath: '/feature/dropdown/item-selection',
          title: 'Item Selection'
        },
        {
          routePath: '/feature/dropdown/limit',
          title: 'Data Limit'
        },
        {
          routePath: '/feature/dropdown/disable',
          title: 'Dropdown Disabling'
        },
        {
          routePath: '/feature/dropdown/item-disabling',
          title: 'Item Disabling'
        },
        {
          routePath: '/feature/dropdown/display-tracked-by',
          title: 'Display Tracked By'
        },
        {
          routePath: '/feature/dropdown/load-on-scroll',
          title: 'Load Data On Scroll'
        },
        {
          routePath: '/feature/dropdown/menu-position',
          title: 'Menu Position'
        },
        {
          routePath: '/feature/dropdown/menu-width-height',
          title: 'Menu Width & Height'
        },
        {
          routePath: '/feature/dropdown/load-data-on-init',
          title: 'Load Data On Init'
        },
        {
          routePath: '/feature/dropdown/on-data-bind',
          title: 'On Data Bind'
        },
        {
          routePath: '/feature/dropdown/translations',
          title: 'Translations'
        },
        {
          routePath: '/feature/dropdown/events',
          title: 'Events'
        },
        {
          routePath: '/feature/dropdown/templates/dropdown-option-template',
          title: 'Option Template'
        },
        {
          routePath: '/feature/dropdown/templates/dropdown-option-group-header-template',
          title: 'Group Header Template'
        },
        {
          routePath: '/feature/dropdown/templates/loading-spinner-template',
          title: 'Loading Template'
        }
      ]
    }
  ];

  public activeMenuItem: MenuItem;

  @ViewChild('pageWrapper')
  public pageWrapper: ElementRef;

  constructor(private router: Router) {
    const path = router.url.split('#')[0];
    for (const menuGroup of this.menuGroups) {
      const item = menuGroup.menuItems.find((menuItem: MenuItem) => {
        return menuItem.routePath === path;
      });

      if (item) {
        this.activeMenuItem = item;
        break;
      }
    }
  }

  public onThemeChange(cssClass: string): void {
    this.themeCssClass = cssClass;
  }

  public onRouteChange(menuItem: MenuItem): void {
    this.activeMenuItem = menuItem;
    this.pageWrapper.nativeElement.scrollTop = 0;
  }
}

