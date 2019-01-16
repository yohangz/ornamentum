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
              anchor: 'basicUsage'
            },
            {
              title: 'Installation',
              anchor: 'installation'
            },
            {
              title: 'Peer Dependencies',
              anchor: 'peerDependencies'
            },
            {
              title: 'Functionality',
              anchor: 'functionality'
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/client-side-data-binding',
          title: 'Client-side Data Binding',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/server-side-data-binding',
          title: 'Server-side Data Binding',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/real-time-data-binding',
          title: 'Realtime Data Binding',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/pagination',
          title: 'Pagination',
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
                  title: 'Page',
                  anchor: 'page'
                },
                {
                  title: 'Limit',
                  anchor: 'limit'
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
          routePath: '/feature/data-table/column/sorting',
          title: 'Column Sorting',
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
          title: 'Row Grouping',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/column/filtering',
          title: 'Filtering',
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
              title: 'Filter Text Box',
              anchor: 'filterTextBox',
              subNavigation: [
                {
                  title: 'Useful Properties',
                  anchor: 'filterTextBoxUsefulProperties',
                  subNavigation: [
                    {
                      title: 'Filter Placeholder',
                      anchor: 'filterPlaceholder'
                    },
                    {
                      title: 'Show Filter Clear Button',
                      anchor: 'showFilterClearButton'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Filter Dropdown',
              anchor: 'filterDropdown',
              subNavigation: [
                {
                  title: 'Useful Properties',
                  anchor: 'filterDropdownUsefulProperties',
                  subNavigation: [
                    {
                      title: 'Dropdown Filter Menu Position',
                      anchor: 'dropdownFilterMenuPosition'
                    },
                    {
                      title: 'Dropdown Filter Show Option Select Check Box',
                      anchor: 'dropdownFilterShowOptionSelectCheckbox'
                    },
                    {
                      title: 'Dropdown Filter Close Menu OnSelect',
                      anchor: 'dropdownFilterCloseMenuOnSelect'
                    },
                    {
                      title: 'Dropdown Filter Select Mode',
                      anchor: 'dropdownFilterSelectMode'
                    },
                    {
                      title: 'Dropdown Filter Wrap Display Select Limit',
                      anchor: 'dropdownFilterWrapDisplaySelectLimit'
                    },
                    {
                      title: 'Dropdown Filter Show Selected Option Remove Button',
                      anchor: 'dropdownFilterShowSelectedOptionRemoveButton'
                    },
                    {
                      title: 'Dropdown Filter Group By Field',
                      anchor: 'dropdownFilterGroupByField'
                    },
                    {
                      title: 'Dropdown Filter Menu Height',
                      anchor: 'dropdownFilterMenuHeight'
                    },
                    {
                      title: 'Dropdown Filter Menu Width',
                      anchor: 'dropdownFilterMenuWidth'
                    },
                    {
                      title: 'Dropdown Filter Multi Select Option Max Width',
                      anchor: 'dropdownFilterMultiSelectOptionMaxWidth'
                    },
                    {
                      title: 'Dropdown Filter Searchable',
                      anchor: 'dropdownFilterSearchable'
                    },
                    {
                      title: 'Dropdown Filter Search Debounce',
                      anchor: 'dropdownFilterSearchDebounce'
                    },
                    {
                      title: 'Dropdown Filter Search Debounce Time',
                      anchor: 'dropdownFilterSearchDebounceTime'
                    },
                    {
                      title: 'Column Value Filter',
                      anchor: 'filter'
                    }
                  ]
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
          routePath: '/feature/data-table/row-selection',
          title: 'Row Selection',
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
                  title: 'Row Selection Mode',
                  anchor: 'selectMode'
                },
                {
                  title: 'Show Row Select Checkbox',
                  anchor: 'showRowSelectCheckbox'
                },
                {
                  title: 'Select On Row Click',
                  anchor: 'selectOnRowClick'
                },
                {
                  title: 'Select Track By',
                  anchor: 'selectTrackBy'
                },
                {
                  title: 'Set Selected Row',
                  anchor: 'selectedRow'
                },
                {
                  title: 'Set Selected Rows',
                  anchor: 'selectedRows'
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
          routePath: '/feature/data-table/column/resizing',
          title: 'Column Resizing',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/data-persistence',
          title: 'Data Persistence',
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
                  title: 'Storage Mode',
                  anchor: 'storageMode'
                },
                {
                  title: 'State Saving ID',
                  anchor: 'stateId'
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
          routePath: '/feature/data-table/substitute-rows',
          title: 'Substitute Rows',
          navigation: [
            {
              title: 'What You Will See',
              anchor: 'whatYouWillSee'
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage',
              subNavigation: [
                {
                  title: 'With Substitute Rows',
                  anchor: 'withSubstituteRows'
                },
                {
                  title: 'Without Substitute Rows',
                  anchor: 'withoutSubstituteRows'
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
          routePath: '/feature/data-table/loading-spinner',
          title: 'Data Loading Spinner',
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
                  title: 'Show Loading Spinner',
                  anchor: 'showLoadingSpinner'
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
          title: 'Translations',
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
              title: 'Translations for No Data',
              anchor: 'translationsForNoData',
              subNavigation: [
                {
                  title: 'No Data Message Header',
                  anchor: 'noDataMessageHeader'
                },
                {
                  title: 'No Data Message Body',
                  anchor: 'noDataMessageBody'
                }
              ]
            },
            {
              title: 'Translations for Pagination',
              anchor: 'translationsForPagination',
              subNavigation: [
                {
                  title: 'Pagination Limit',
                  anchor: 'paginationLimit'
                },
                {
                  title: 'Pagination Range',
                  anchor: 'paginationRange'
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
          routePath: '/feature/data-table/events',
          title: 'Events',
          navigation: [
            {
              title: 'Events Hierarchy',
              anchor: 'eventsHierarchy'
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage'
            },
            {
              title: 'Useful Events',
              anchor: 'usefulEvents',
              subNavigation: [
                {
                  title: 'Column Bind',
                  anchor: 'columnBind'
                },
                {
                  title: 'Init',
                  anchor: 'init'
                },
                {
                  title: 'Data Bound',
                  anchor: 'dataBound'
                },
                {
                  title: 'Row Bind',
                  anchor: 'rowBind'
                },
                {
                  title: 'Cell Bind',
                  anchor: 'cellBind'
                },
                {
                  title: 'Row Select Change',
                  anchor: 'rowSelectChange'
                },
                {
                  title: 'All Row Select Change',
                  anchor: 'allRowSelectChange'
                },
                {
                  title: 'Row Click',
                  anchor: 'rowClick'
                },
                {
                  title: 'Row Double Click',
                  anchor: 'rowDoubleClick'
                },
                {
                  title: 'Cell Click',
                  anchor: 'cellClick'
                },
                {
                  title: 'Header Click',
                  anchor: 'headerClick'
                },
              ]
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/templates/cell-template',
          title: 'Cell Template',
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
                  title: 'Column',
                  anchor: 'column'
                },
                {
                  title: 'Row',
                  anchor: 'row'
                },
                {
                  title: 'Span Index',
                  anchor: 'spanIndex'
                },
                {
                  title: 'Row Span',
                  anchor: 'rowSpan'
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
          routePath: '/feature/data-table/templates/expand-template',
          title: 'Row Expand Template',
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
                  title: 'Row',
                  anchor: 'row'
                },
                {
                  title: 'Expand On Row Click',
                  anchor: 'expandOnRowClick'
                },
                {
                  title: 'Show Row Expand Loading Spinner',
                  anchor: 'showRowExpandLoadingSpinner'
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
          routePath: '/feature/data-table/templates/loading-spinner-template',
          title: 'Loading Spinner Template',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/templates/no-records-template',
          title: 'No Records Template',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/data-table/styling-and-themes',
          title: 'Styling & Themes',
          navigation: [
            {
              title: 'Including Theme Support',
              anchor: 'themeSupport',
              subNavigation: [
                {
                  title: 'Base Theme',
                  anchor: 'baseTheme'
                },
                {
                  title: 'Dark Theme',
                  anchor: 'darkTheme'
                },
                {
                  title: 'Flat Theme',
                  anchor: 'flatTheme'
                },
                {
                  title: 'Ornamentum Theme',
                  anchor: 'ornamentumTheme'
                },
                {
                  title: 'Aegean Theme',
                  anchor: 'aegeanTheme'
                }
              ]
            }
          ]
        },
        {
          routePath: '/feature/data-table/custom-theming',
          title: 'Custom Theming'
        }
      ]
    },
    {
      expanded: true,
      name: 'Dropdown',
      menuItems: [
        {
          routePath: '/feature/dropdown/overview',
          title: 'Overview',
          navigation: [
            {
              title: 'Basic Usage',
              anchor: 'basicUsage'
            },
            {
              title: 'Installation',
              anchor: 'installation'
            },
            {
              title: 'Peer Dependencies',
              anchor: 'peerDependencies'
            },
            {
              title: 'Functionality',
              anchor: 'functionality'
            },
            {
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/client-side-data-binding',
          title: 'Client-side Data Binding',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/server-side-data-binding',
          title: 'Server-side Data Binding',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/real-time-data-binding',
          title: 'Realtime Data Binding',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/grouping',
          title: 'Grouping',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/filtering',
          title: 'Filtering',
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
                  title: 'Filter Debounce',
                  anchor: 'filterDebounce'
                },
                {
                  title: 'Filter Debounce Time',
                  anchor: 'filterDebounceTime'
                },
                {
                  title: 'Filter Text',
                  anchor: 'filterText'
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
          routePath: '/feature/dropdown/item-selection',
          title: 'Item Selection',
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
                  title: 'Set First Option Selected',
                  anchor: 'setFirstOptionSelected'
                },
                {
                  title: 'Show Option Select Checkbox',
                  anchor: 'showOptionSelectCheckbox'
                },
                {
                  title: 'Selected Option',
                  anchor: 'selectedOption'
                },
                {
                  title: 'Selected Options',
                  anchor: 'selectedOptions'
                },
                {
                  title: 'Select Mode',
                  anchor: 'selectMode'
                },
                {
                  title: 'Show Clear Selection Button',
                  anchor: 'showClearSelectionButton'
                },
                {
                  title: 'Show Selected Option Remove Button',
                  anchor: 'showSelectedOptionRemoveButton'
                },
                {
                  title: 'Multi Select Option Max Width',
                  anchor: 'multiSelectOptionMaxWidth'
                },
                {
                  title: 'Wrap Display Select Limit',
                  anchor: 'wrapDisplaySelectLimit'
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
          routePath: '/feature/dropdown/limit',
          title: 'Data Limit',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/disable',
          title: 'Dropdown Disabling',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/item-disabling',
          title: 'Item Disabling',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/display-items',
          title: 'Display Items',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/load-on-scroll',
          title: 'Load Data On Scroll'
        },
        {
          routePath: '/feature/dropdown/menu-position',
          title: 'Menu Position',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/menu-width-height',
          title: 'Menu Width & Height',
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
                  title: 'Menu Height',
                  anchor: 'menuHeight'
                },
                {
                  title: 'Menu Width',
                  anchor: 'menuWidth'
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
          routePath: '/feature/dropdown/load-data-on-init',
          title: 'Load Data On Init',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/on-data-bind',
          title: 'On Data Bind',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/translations',
          title: 'Translations',
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
                  title: 'No Data Message',
                  anchor: 'noDataMessage'
                },
                {
                  title: 'Filter Placeholder',
                  anchor: 'filterPlaceholder'
                },
                {
                  title: 'Select Placeholder',
                  anchor: 'selectPlaceholder'
                },
                {
                  title: 'Selected Item Wrap Placeholder',
                  anchor: 'selectedItemWrapPlaceholder'
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
          routePath: '/feature/dropdown/events',
          title: 'Events',
          navigation: [
            {
              title: 'Events Hierarchy',
              anchor: 'eventsHierarchy'
            },
            {
              title: 'Basic Usage',
              anchor: 'basicUsage'
            },
            {
              title: 'Useful Events',
              anchor: 'usefulEvents',
              subNavigation: [
                {
                  title: 'Init',
                  anchor: 'init'
                },
                {
                  title: 'Data Bound',
                  anchor: 'dataBound'
                },
                {
                  title: 'Select Change',
                  anchor: 'selectChange'
                },
                {
                  title: 'Trigger Select Change On Init',
                  anchor: 'triggerSelectChangeOnInit'
                },
                {
                  title: 'Trigger Select Change on First Option Select',
                  anchor: 'triggerSelectChangeOnFirstOptionSelect'
                },
                {
                  title: 'Trigger Select Change On Model Update',
                  anchor: 'triggerSelectChangeOnModelUpdate'
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
          routePath: '/feature/dropdown/templates/dropdown-option-template',
          title: 'Option Template',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/templates/dropdown-option-group-header-template',
          title: 'Option Group Header Template',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/templates/loading-spinner-template',
          title: 'Loading Spinner Template',
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
              title: 'Suggested Links',
              anchor: 'suggestedLinks'
            }
          ]
        },
        {
          routePath: '/feature/dropdown/styling-and-themes',
          title: 'Styling & Themes',
          navigation: [
            {
              title: 'Including Theme Support',
              anchor: 'themeSupport',
              subNavigation: [
                {
                  title: 'Base Theme',
                  anchor: 'baseTheme'
                },
                {
                  title: 'Dark Theme',
                  anchor: 'darkTheme'
                },
                {
                  title: 'Flat Theme',
                  anchor: 'flatTheme'
                },
                {
                  title: 'Ornamentum Theme',
                  anchor: 'ornamentumTheme'
                },
                {
                  title: 'Aegean Theme',
                  anchor: 'aegeanTheme'
                }
              ]
            }
          ]
        },
        {
          routePath: '/feature/dropdown/custom-theming',
          title: 'Custom Theming'
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

