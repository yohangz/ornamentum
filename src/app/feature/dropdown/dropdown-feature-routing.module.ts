import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DropdownOverviewComponent,
  DropdownServerSideDataBindingComponent,
  DropdownRealTimeDataBindingComponent,
  DropdownItemGroupingComponent,
  DropdownFilteringComponent,
  DropdownItemSelectionComponent,
  DropdownLimitComponent,
  DropdownDisablingComponent,
  DropdownItemDisablingComponent,
  DropdownDisplayTrackedByComponent,
  DropdownLoadOnScrollComponent,
  DropdownMenuPositionComponent,
  DropdownMenuWidthHeightComponent,
  DropdownLoadOnInitComponent,
  DropdownOnDataBindComponent,
  DropdownTranslationsComponent,
  DropdownEventsComponent,
  DropdownOptionTemplateComponent,
  DropdownOptionGroupHeaderTemplateComponent,
  DropdownLoadingSpinnerTemplateComponent
} from './components';
import { SeoGuard } from '../../core/seo.guard';

/**
 * Represent application dropdown feature module routes.
 * @type Routes
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    component: DropdownOverviewComponent,
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
    component: DropdownServerSideDataBindingComponent,
    path: 'server-side-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding |  Server Side Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DropdownRealTimeDataBindingComponent,
    path: 'real-time-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding |  Realtime Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DropdownItemGroupingComponent,
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
    component: DropdownFilteringComponent,
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
    component: DropdownItemSelectionComponent,
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
    component: DropdownLimitComponent,
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
    component: DropdownDisablingComponent,
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
    component: DropdownItemDisablingComponent,
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
    component: DropdownDisplayTrackedByComponent,
    path: 'display-tracked-by',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Display Tracking',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DropdownLoadOnScrollComponent,
    path: 'load-on-scroll',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Load On Scroll',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DropdownMenuPositionComponent,
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
    component: DropdownMenuWidthHeightComponent,
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
    component: DropdownLoadOnInitComponent,
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
    component: DropdownOnDataBindComponent,
    path: 'on-data-bind',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | On Data Bind',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DropdownTranslationsComponent,
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
    component: DropdownEventsComponent,
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
    component: DropdownOptionTemplateComponent,
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
    component: DropdownOptionGroupHeaderTemplateComponent,
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
    component: DropdownLoadingSpinnerTemplateComponent,
    path: 'templates/loading-spinner-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Loading Spinner Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown feature routing module.
 * @class DropdownFeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownFeatureRoutingModule {
}
