import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown overview module routes.
 */
const dropdownOverviewRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic-usage'
  },
  {
    loadChildren: () => import('./dropdown-basic-usage/dropdown-basic-usage.module')
      .then((m) => m.DropdownBasicUsageModule),
    path: 'basic-usage',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown Basic Usage',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown overview routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOverviewRoutes)]
})
export class DropdownOverviewRoutingModule {
}
