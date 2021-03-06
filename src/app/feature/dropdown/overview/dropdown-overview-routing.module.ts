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
    loadChildren: './dropdown-basic-usage/dropdown-basic-usage.module#DropdownBasicUsageModule',
    // loadChildren: () => import('./dropdown-basic-usage/dropdown-basic-usage.module')
    //   .then((m) => m.DropdownBasicUsageModule),
    path: 'basic-usage',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown Basic Usage',
        keywords: 'dropdown,angular dropdown,dropdown list,select options list,angular multi select,multi select dropdown',
        // tslint:disable-next-line
        description: 'Ornamentum dropdown component is a highly configurable lightweight data dropdown list Angular component with multi and single selection modes. Additionally, it supports client/server/real-time data binding along with data filtering, grouping, load on scroll mode, selection, templating, state persistence, theming and much more.'
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
