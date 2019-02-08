import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown features module routes.
 */
const dropdownFeaturesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'item/display'
  },
  {
    loadChildren: './dropdown-item-display/dropdown-item-display.module#DropdownItemDisplayModule',
    path: 'item/display',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Item | Display',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-selection/dropdown-item-selection.module#DropdownItemSelectionModule',
    path: 'item/selection',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Item | Selection',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-filtering/dropdown-item-filtering.module#DropdownItemFilteringModule',
    path: 'item/filtering',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Item | Filtering',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-grouping/dropdown-item-grouping.module#DropdownItemGroupingModule',
    path: 'item/grouping',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality |  Item | Grouping',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown features routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeaturesRoutes)]
})
export class DropdownFeaturesRoutingModule {
}
