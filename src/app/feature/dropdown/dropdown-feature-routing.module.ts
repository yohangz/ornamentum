import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../core/seo.guard';

/**
 * Represent application dropdown feature module routes.
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    loadChildren: './dropdown-overview/dropdown-overview.module#DropdownOverviewModule',
    path: 'overview',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown Overview',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-client-side-data-binding/dropdown-client-side-data-binding.module#DropdownClientSideDataBindingModule',
    path: 'client-side-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Client SIde Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-server-side-data-binding/dropdown-server-side-data-binding.module#DropdownServerSideDataBindingModule',
    path: 'server-side-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Server Side Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-client-side-real-time-data-binding/dropdown-client-side-real-time-data-binding.module#DropdownClientSideRealTimeDataBindingModule',
    path: 'client-side-real-time-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Client SIde Data Binding | Realtime Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-server-side-real-time-data-binding/dropdown-server-side-real-time-data-binding.module#DropdownServerSideRealTimeDataBindingModule',
    path: 'server-side-real-time-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Server Side Data Binding | Realtime Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-grouping/dropdown-item-grouping.module#DropdownItemGroupingModule',
    path: 'grouping',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality |  Grouping',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-filtering/dropdown-filtering.module#DropdownFilteringModule',
    path: 'filtering',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality |  Filtering',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-selection/dropdown-item-selection.module#DropdownItemSelectionModule',
    path: 'item-selection',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality |  Item Selection',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-limit/dropdown-limit.module#DropdownLimitModule',
    path: 'limit',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality |  Data Limit',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-disabling/dropdown-disabling.module#DropdownDisablingModule',
    path: 'disable',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality |  Dropdown Filter Disabling',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-disabling/dropdown-item-disabling.module#DropdownItemDisablingModule',
    path: 'item-disabling',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown  | Functionality | Item Disabling',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-display-items/dropdown-display-items.module#DropdownDisplayItemsModule',
    path: 'display-items',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Display Items',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-menu-position/dropdown-menu-position.module#DropdownMenuPositionModule',
    path: 'menu-position',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Menu Position',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-menu-width-height/dropdown-menu-width-height.module#DropdownMenuWidthHeightModule',
    path: 'menu-width-height',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Menu Width & Height',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-load-on-init/dropdown-load-on-init.module#DropdownLoadOnInitModule',
    path: 'load-data-on-init',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Load Data On Init',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-translations/dropdown-translations.module#DropdownTranslationsModule',
    path: 'translations',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Translations',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-events/dropdown-events.module#DropdownEventsModule',
    path: 'events',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Events',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-template/dropdown-option-template.module#DropdownOptionTemplateModule',
    path: 'templates/dropdown-option-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Dropdown Option Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-group-header-template/' + 'dropdown-option-group-header-template.module#DropdownOptionGroupHeaderTemplateModule',
    path: 'templates/dropdown-option-group-header-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Dropdown Option Group Header Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-loading-spinner-template/dropdown-loading-spinner-template.module#DropdownLoadingSpinnerTemplateModule',
    path: 'templates/loading-spinner-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Loading Spinner Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-themes/dropdown-themes.module#DropdownThemesModule',
    path: 'themes',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum |Dropdown | Styling | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-custom-theming/dropdown-custom-theming.module#DropdownCustomThemingModule',
    path: 'custom-theming',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum |Dropdown | Customization | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown feature routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownFeatureRoutingModule {}
