import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown options module routes.
 */
const dropdownOptionsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-limit'
  },
  {
    loadChildren: './dropdown-data-limit/dropdown-data-limit.module#DropdownDataLimitModule',
    // loadChildren: () => import('./dropdown-data-limit/dropdown-data-limit.module')
    //   .then((m) => m.DropdownDataLimitModule),
    path: 'data-limit',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Data Limit',
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
        title: 'Ornamentum | Dropdown | Functionality |  Dropdown Disabling',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-item-disabling/dropdown-item-disabling.module#DropdownItemDisablingModule',
    // loadChildren: () => import('./dropdown-item-disabling/dropdown-item-disabling.module')
    //   .then((m) => m.DropdownItemDisablingModule),
    path: 'item/disabling',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown  | Functionality | Item Disabling',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown options routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionsRoutes)]
})
export class DropdownOptionsRoutingModule {
}
