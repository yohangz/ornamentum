import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  MainComponent,
  PageNotFoundComponent,
  OverviewComponent
} from './main/components';

/**
 * Represent application main routes.
 * @type Routes
 */
const appRoutes: Routes = [
  {
    component: OverviewComponent,
    loadChildren: './overview/overview.module#OverviewModule',
    path: ''
  },
  {
    component: MainComponent,
    path: 'feature',
    children: [
      {
        loadChildren: './feature/data-table/data-table-feature.module#DataTableFeatureModule',
        path: 'data-table'
      },
      {
        loadChildren: './feature/dropdown/dropdown-feature.module#DropdownFeatureModule',
        path: 'dropdown'
      }
    ]
  },
  {
    component: PageNotFoundComponent,
    path: '**'
  }
];

/**
 * Application routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
  })]
})
export class AppRoutingModule {
}

