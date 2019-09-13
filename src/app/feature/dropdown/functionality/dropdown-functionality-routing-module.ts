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
    redirectTo: 'item/display'
  },
  {
    loadChildren: './dropdown-item-display/dropdown-item-display.module#DropdownItemDisplayModule',
    // loadChildren: () => import('./dropdown-item-display/dropdown-item-display.module')
    //   .then((m) => m.DropdownItemDisplayModule),
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
    // loadChildren: () => import('./dropdown-item-selection/dropdown-item-selection.module')
    //   .then((m) => m.DropdownItemSelectionModule),
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
    // loadChildren: () => import('./dropdown-item-filtering/dropdown-item-filtering.module')
    //   .then((m) => m.DropdownItemFilteringModule),
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
    // loadChildren: () => import('./dropdown-item-grouping/dropdown-item-grouping.module')
    //   .then((m) => m.DropdownItemGroupingModule),
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
 * Application dropdown functionality routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFunctionalityRoutes)]
})
export class DropdownFunctionalityRoutingModule {
}
