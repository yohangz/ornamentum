import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown functionality module routes.
 */
const dropdownFunctionalityRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'option/display-value'
  },
  {
    loadChildren: './dropdown-data-limit/dropdown-data-limit.module#DropdownDataLimitModule',
    // loadChildren: () => import('./dropdown-data-limit/dropdown-data-limit.module')
    //   .then((m) => m.DropdownDataLimitModule),
    path: 'data-limit',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality | Data Limit',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-disabling/dropdown-disabling.module#DropdownDisablingModule',
    // loadChildren: () => import('./dropdown-disabling/dropdown-disabling.module')
    //   .then((m) => m.DropdownDisablingModule),
    path: 'disabling',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality |  Dropdown Disabling',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-disabling/dropdown-option-disabling.module#DropdownOptionDisablingModule',
    // loadChildren: () => import('./dropdown-option-disabling/dropdown-option-disabling.module')
    //   .then((m) => m.DropdownOptionDisablingModule),
    path: 'option/disabling',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown  | Functionality | Option Disabling',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-display-value/dropdown-option-display-value.module#DropdownOptionDisplayValueModule',
    // loadChildren: () => import('./dropdown-option-display-value/dropdown-option-display-value.module')
    //   .then((m) => m.DropdownOptionDisplayValueModule),
    path: 'option/display-value',
    canActivate: [SeoGuard],
    data: {
      seo: {
        // tslint:disable-next-line
        keywords: 'dropdown display value,dropdown display track by,dropdown display value,dropdown display field,dropdown render value,dropdown render field',
        description: 'Dropdown option display track by value field is used to render select options.'
      }
    }
  },
  {
    loadChildren: './dropdown-option-selection/dropdown-option-selection.module#DropdownOptionSelectionModule',
    // loadChildren: () => import('./dropdown-option-selection/dropdown-option-selection.module')
    //   .then((m) => m.DropdownOptionSelectionModule),
    path: 'option/selection',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality | Option | Selection',
        keywords: 'dropdown option selection,dropdown selection,dropdown select track,dropdown options track',
        description: 'Dropdown supports multi ,single and single toggle option selection modes out of the box.'
      }
    }
  },
  {
    loadChildren: './dropdown-option-filtering/dropdown-option-filtering.module#DropdownOptionFilteringModule',
    // loadChildren: () => import('./dropdown-option-filtering/dropdown-option-filtering.module')
    //   .then((m) => m.DropdownOptionFilteringModule),
    path: 'option/filtering',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality | Option | Filtering',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-grouping/dropdown-option-grouping.module#DropdownOptionGroupingModule',
    // loadChildren: () => import('./dropdown-option-grouping/dropdown-option-grouping.module')
    //   .then((m) => m.DropdownOptionGroupingModule),
    path: 'option/grouping',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality |  Option | Grouping',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown functionality routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFunctionalityRoutes)]
})
export class DropdownFunctionalityRoutingModule {
}
